import React from 'react';
import { faDesktop, faMobileAlt, faDatabase, faCogs, faKey, faBookReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Skills = () => {
    return (
        <section className="box-container">
            <div className="box">
                <FontAwesomeIcon icon={faDesktop} className="icon-languages"/>
                <h3>Diseño web responsive</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faMobileAlt} className="icon-languages"/>
                <h3>Mobile first</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faDatabase} className="icon-languages"/>
                <h3>Base de datos</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faCogs} className="icon-languages"/>
                <h3>Modelado de Api</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faKey} className="icon-languages"/>
                <h3>Autenticación</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faBookReader} className="icon-languages"/>
                <h3>Autodidacta</h3>
            </div>
        </section>
    )
}
