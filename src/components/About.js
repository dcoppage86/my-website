import React from 'react';
import Family from '../assets/images/Family.JPG'

const About = () => {
    return (
        <div className="about-div">
            <h1>A Little About Me</h1>
            <br></br>
            <br></br>
            <p className="about-content">I am lover of all things cinema, an avid audiophile and strict black coffee drinker. I have one dog and look to grow that part of my family as well. Always trust a dog person...I say.</p>
            <p className="about-content">I bring with me a decade of customer service experience, time management, efficiency and the ability to learn quickly. After years of cutting hair, I was ready for
            a change. During the height of the pandemic I chose to make the leap into Software Development. Entering into Flatiron School's Full-Stack Software Engineering program my love for coding grew exponentially. My coding journey
            was tough, but enabled me to regain a passion for learning and personal growth. I am proud of what I have built so far and excited to see what else I can do with this, especially with a strong team.
            </p>
        <img className="family-photo" src={Family} alt="family"/>
            <p className="about-content">I am a husband and father to four beautiful children, who strengthen me and give me all the drive I need to work diligently toward my goals. At 6 years old, my oldest daughter, Fynleigh was diagnosed with ASD (Autism Spectrum Disorder). She is a birght soul and definitely keeps dad on his toes,
            which of all makes me power on to be the best example I can be for my girls. They are my everything and so much more. </p>
        </div>
    );
}

export default About;
