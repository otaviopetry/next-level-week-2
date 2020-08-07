import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import PageHeader from '../../components/PageHeader';

function TeacherForm () {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                heading="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher este formulário de inscrição."
            />
            
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="text" id="avatar"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input type="text" id="whatsapp"/>
                    </div>                    
                </fieldset>
            </main>         
        </div>
    );
}

export default TeacherForm;