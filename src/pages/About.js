import React from 'react'
import { Heading } from '../components/Heading'
import { Profile } from '../components/Profile'

export const About = () => {
    return (
        <div className="container">
            <Profile />
            <Heading 
                subtitle="Lenguajes de Programación"
                description="Estos son los lenguajes de programación que domino actualmente:"
            />
        </div>
    )
}
