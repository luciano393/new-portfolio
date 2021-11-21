import React from 'react';
import { faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Languages = () => {
    return (
        <section className="box-container">
            <div className="box">
                <FontAwesomeIcon icon={faJs} className="icon-languages"/>
                <h3>JavaScript</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faPython} className="icon-languages"/>
                <h3>Python</h3>
            </div>
        </section>
    )
}
