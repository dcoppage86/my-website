import React from 'react';
import ReactPlayer from 'react-player';
import portfolioData from '../assets/data/portfolioData.json'


const PortfolioCard = () => {
    return (
        portfolioData.map(portData => 
                <div className="portfolio-div">
                    <p>{portData.content}</p>
                    <ReactPlayer className="port-video" width="320px" height="240px" url={portData.video_url}/>
                    <a className="port-repo" href={portData.repo}>Github</a>
                </div>)
    );
}

export default PortfolioCard;
