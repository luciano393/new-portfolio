import React from 'react'

export const Heading = ({ title, description, subtitle }) => {
    return (
        <div className="Heading">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
        </div>
    )
}
