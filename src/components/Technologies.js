import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faSass, faGitAlt, faGithubAlt, faLinux, faHtml5, faEnvira, faCss3Alt, faAtlassian, faDailymotion } from "@fortawesome/free-brands-svg-icons";

export const Technologies = () => {
    return (
        <div className="box-container">
            <div className="box">
                <FontAwesomeIcon icon={faReact} className="icon-languages"/>
                <h3>React js</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faNodeJs} className="icon-languages"/>
                <h3>Node js</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faSass} className="icon-languages"/>
                <h3>SASS</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faGitAlt} className="icon-languages"/>
                <h3>Git</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faGithubAlt} className="icon-languages"/>
                <h3>GitHub</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faLinux} className="icon-languages"/>
                <h3>Linux</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faHtml5} className="icon-languages"/>
                <h3>Html5</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faEnvira} className="icon-languages"/>
                <h3>MongoDB</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faCss3Alt} className="icon-languages"/>
                <h3>CSS3</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faAtlassian} className="icon-languages"/>
                <h3>Jira y Trello</h3>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faDailymotion} className="icon-languages"/>
                <h3>Django</h3>
            </div>
        </div>
    )
}
