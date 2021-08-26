import React from 'react';
import Family from '../assets/images/Family.JPG'

const About = () => {
    return (
        <div className="about-div">
            <h1>A Little About Me</h1>
            <br></br>
            <br></br>
            <p className="about-content">I bring with a decade of customer service experience, time management, efficiency and the ability to learn quickly. 
            I am a husband and father to four beautiful children, who strengthen me and give me all the drive I need to work diligently toward my goals. After years of cutting hair, I was ready for
            a change. During the height of the pandemic I chose to make the leap into Software Development. Entering into Flatiron School's Full-Stack Software Engineering program my love for coding grew exponentially. </p>
            <p className="about-content">I am lover of all things cinema, an avid audiophile and strict black coffee drinker. I have one dog and looking to grow that part of my family as well. Always trust a dog person...I say.</p>
        <img className="family-photo" src={Family} alt="family"/>
        </div>
    );
}

export default About;
