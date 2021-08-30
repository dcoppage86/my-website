import React from 'react';
import ReactPlayer from 'react-player';
import portfolioData from '../assets/data/portfolioData.json'


const PortfolioCard = () => {
    return (
        portfolioData.map(portData => 
                <div className="portfolio-div" key={portData.id}>
                    <p className="port-content">{portData.content}</p>
                    <div className="player-wrapper">
                        <ReactPlayer className="react-player" width="100%" height="100%" url={portData.video_url}/> 
                    </div>
                    <br></br>
                    <p className="port-repo" href={portData.repo}>Github</p>
                </div>)
    );
}

export default PortfolioCard;
