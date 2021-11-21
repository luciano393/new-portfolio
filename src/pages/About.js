import React from 'react'
import { Heading } from '../components/Heading'
import { Languages } from '../components/Languages'
import { Technologies } from '../components/Technologies'
import { Profile } from '../components/Profile'
import { Skills } from '../components/Skills'

export const About = () => {
    return (
        <div className="container">
            <Profile />
            <Heading 
                subtitle="Habilidades"
            />
            <Skills />
            <Heading 
                subtitle="Lenguajes de Programación"
                description="Estos son los lenguajes de programación que domino actualmente:"
            />
            <Languages />
            <Heading 
                subtitle="Mis tecnologías"
                description="Algunas de las tecnologías que manejo:"
            />
            <Technologies />
        </div>
    )
}
