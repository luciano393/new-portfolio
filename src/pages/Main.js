import React from 'react';
import { Project } from '../components/Project';

export const Main = () => {
    return (
        <div className="container">
            <Project 
                title="Payments"
                description="Aplicación creada con MongoDB, Express js, React js y Node Js"
                imageone="GetStartedMobile_Pw5Jzax_1ru.png?updatedAt=1637464859319"
                imagetwo="MainMobile_w4D9MgRni.png?updatedAt=1637464859318"
            />
            <Project 
                title="tuProfe"
                description="Aplicación creada con MongoDB, Express js, React js y Node Js"
                imageone="MainTuprofe_9gjCisoJH.png?updatedAt=1637464859353"
                imagetwo="SearchTuprofe_Uv_Pdq8dea.png?updatedAt=1637464859561"
            />
        </div>
    )
}
