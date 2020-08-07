import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

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

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" /> 

                    <Textarea name="bio" label="Biografia" />                 
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
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
                    <Input name="cost" label="Custo da hora/aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>         
        </div>
    );
}

export default TeacherForm;