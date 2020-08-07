import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

interface Filters {
    subject: string;
    week_day: string;
    time: string;
}
export default class ClassesController {
    async index (request: Request, response: Response) {
        const filters = (request.query);

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        // give types (interface wont work here)
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select('classes.*', 'users.*');

        response.status(200).json(classes);
    }

    async create (request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        // create instance of db transaction
        const trx = await db.transaction();

        try {
            // save it to db and store the response array
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            // get user id from first position (the only user created)
            const user_id = insertedUsersIds[0];

            // save the created class type to db and store response
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })

            // get the id of the class
            const class_id = insertedClassesIds[0];

            // save the available hours to db and store response
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),           
                    to: convertHourToMinutes(scheduleItem.to),           
                }
            })

            // save the class available hours to db
            await trx('class_schedule').insert(classSchedule);

            // commit the transaction
            await trx.commit();

            response.status(201).send();

        } catch (err) {

            // undo any modification to db if an error occurs
            await trx.rollback();

            response.status(400).json({
                error: 'Unexpected error while creating new class' 
            })
        }
    }
}