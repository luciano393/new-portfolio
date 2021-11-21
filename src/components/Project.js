import { IKImage } from 'imagekitio-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Project = ({title, description, imageone, imagetwo, url}) => {
    return (
        <section className="Project">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="project-container">
                <IKImage 
                    path={`/${imageone}`}
                    className="image-project"
                />
                <IKImage 
                    path={`/${imagetwo}`}
                    className="image-project"
                />
            </div>
            <a href={url} className="link">Ver mas</a>
        </section>
    )
}
