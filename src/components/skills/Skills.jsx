import React from 'react'
import '../skills/Skills.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5, faReact, faCss3Alt, faJsSquare, faGitAlt, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { SiRubyonrails, SiRedux, SiBootstrap, SiPostgresql} from 'react-icons/si'


function Skills() {
    return (
        <div className="skills">
            <div className="skills-background">
                <div className="skills-wrapper">
                    <div className="skills-item"><SiRubyonrails style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><FontAwesomeIcon icon={faJsSquare} style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><FontAwesomeIcon icon={faReact} style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><SiRedux style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><FontAwesomeIcon icon={faNodeJs} style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><SiBootstrap style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><FontAwesomeIcon icon={faCss3Alt} style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><FontAwesomeIcon icon={faHtml5} style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><SiPostgresql style={{height: 50, width: 50}}/></div>
                    <div className="skills-item"><FontAwesomeIcon icon={faGitAlt} style={{height: 50, width: 50}}/></div>
                </div>
            </div>
        </div>
    )
}


export default Skills
