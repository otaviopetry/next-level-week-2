import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

function TeacherForm () {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                heading="Que incrível que você quer dar aulas!"
            />            
        </div>
    );
}

export default TeacherForm;