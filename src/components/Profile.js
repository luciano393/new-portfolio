import { IKImage } from 'imagekitio-react'
import React from 'react'

export const Profile = () => {
    return (
        <section className="Profile">
            <IKImage
                path="/mifotote_2FhJvb8tNlt.png?updatedAt=1637179392511"
                transformation={[{ width: 200, height: 200}]}
                className="image-profile"
            />
            <h2>Mi nombre es Luciano Ibarra</h2>
            <h3>Soy desarrollador web full stack</h3>
            <p>Me especializo en JavaScript y Python. Soy estudiante de la Universidad Nacional de Lujan, donde curso la carrera Licenciatura en Sistemas de información. Ademas actualmente me encuentro en un curso de Egg Educación aprendiendo Java.</p>
        </section>
    )
}
