import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm () {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }        
    ])

    function addNewScheduleItem () {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }                                
        ])
    }

    function setScheduleItemValue (position: number, field: string, value: string) {
        
        // iterate through the array, find the desired object and update the field value
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
        console.log(updatedScheduleItems);
    }

    function handleCreateClass (evt: FormEvent) {
        evt.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso')
        }).catch( err => {
            alert('Aconteceu um erro.');
            console.warn(err);
        })

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                heading="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher este formulário de inscrição."
            />
            
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
    
                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={name} 
                            onChange={(evt) => setName(evt.target.value)} 
                        />
    
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(evt) => setAvatar(evt.target.value)}
                        />
    
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(evt) => setWhatsapp(evt.target.value)}
                        /> 
    
                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio}
                            onChange={(evt) => setBio(evt.target.value)}
                        />                 
                    </fieldset>
    
                    <fieldset>
                        <legend>Sobre a aula</legend>
    
                        <Select
                            value={subject}
                            onChange={(evt) => setSubject(evt.target.value)}
                            name="subject"
                            label="Matéria"
                            disabledOption="Selecione a matéria"
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
                        <Input 
                            name="cost" 
                            label="Custo da hora/aula" 
                            value={cost}
                            onChange={(evt) => setCost(evt.target.value)}
                        />
                    </fieldset>
    
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ novo horário</button>
                        </legend>
    
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        disabledOption="Selecione um dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={ evt => setScheduleItemValue(index, 'week_day', evt.target.value)}
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
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={ evt => setScheduleItemValue(index, 'from', evt.target.value) }
                                    />

                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={ evt => setScheduleItemValue(index, 'to', evt.target.value) }
                                    />
                                </div>
                            );
                        })}
                    </fieldset>
    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>         
        </div>
    );
}

export default TeacherForm;