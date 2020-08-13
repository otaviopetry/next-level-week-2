import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
    id: number;
    name: string;
    subject: string;
    avatar: string;
    bio: string;
    whatsapp: string;
    cost: number;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src={teacher.avatar} 
                    alt={teacher.name}
                />
                <div>
                    <strong> {teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>

                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;

