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
        </section>
    )
}
