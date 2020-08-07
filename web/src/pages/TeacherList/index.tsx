import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';

function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader
                heading="Estes são os proffys disponíveis"
            >
                
                <form id="search-teachers">
                    <Input label='Matéria' name='subject' />
                    <Input label='Dia da semana' name='week_day' />
                    <Input label='Hora' name='time' type="time" />                    
                </form>

            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
                        
        </div>
    );
}

export default TeacherList;