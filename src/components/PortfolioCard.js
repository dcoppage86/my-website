import React from 'react';
import ReactPlayer from 'react-player';
import portfolioData from '../assets/data/portfolioData.json'


const PortfolioCard = () => {
    return (
        portfolioData.map(portData => 
                <div className="portfolio-div">
                    <p>{portData.content}</p>
                    <ReactPlayer className="port-video" width="640px" height="480px" url={portData.video_url}/>
                    <br></br>
                    <p className="port-repo" href={portData.repo}>Github</p>
                </div>)
    );
}

export default PortfolioCard;
