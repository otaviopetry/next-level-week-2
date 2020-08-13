import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList () {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers (evt: FormEvent) {
        evt.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day: weekday,
                time
            }
        })

        setTeachers(response.data);

        console.log(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader
                heading="Estes são os proffys disponíveis"
            >
                
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        disabledOption="Selecione a matéria"
                        value={subject}
                        onChange={evt => setSubject(evt.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        disabledOption="Selecione um dia da semana"
                        value={weekday}
                        onChange={evt => setWeekday(evt.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input 
                        label='Hora' 
                        name='time' 
                        type="time" 
                        value={time}
                        onChange={evt => setTime(evt.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>           
                </form>

            </PageHeader>

            <main>
                {teachers.map( (teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}                
            </main>
                        
        </div>
    );
}

export default TeacherList;