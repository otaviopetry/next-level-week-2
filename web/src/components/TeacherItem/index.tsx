import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars3.githubusercontent.com/u/55718618?s=460&u=4a2cd153a684ad1aa997b7ee48d546c267448c75&v=4" 
                    alt="Otavio Petry"
                />
                <div>
                    <strong>Otavio Petry</strong>
                    <span>Finalizações</span>
                </div>
            </header>

            <p>Toda a virtuosidade de um clássico camisa 21. Só chute no ângulo</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
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

