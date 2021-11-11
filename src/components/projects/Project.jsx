import React from 'react'
import portfolioData from '../../assets/data/portfolioData.json'
import ReactPlayer from 'react-player'
import './Project.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Project = () => {
    return (
        <div className="p">
            <h1 className="p-header">Projects</h1>
            <div className="p-wrapper">
                {portfolioData.map(portData => 
                <div className="portfolio-div" key={portData.id}>
                    <p className="port-content">{portData.content}</p>
                    <div className="player-wrapper">
                        <ReactPlayer className="react-player" width="100%" height="100%" url={portData.video_url}/> 
                    </div>
                    <a className="port-repo" href={portData.repo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{height: 25, width: 25}}/></a>
                </div>)}
            </div>
            
        </div>
    )
}

export default Project
