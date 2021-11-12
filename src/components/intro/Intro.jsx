import React from 'react'
import './Intro.css'
import DKCDEV from '../../assets/images/DKCDEV.png'

const Intro = () => {
  return (
        <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Dakota Coppage</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Full Stack Software Engineer</div>
                <div className="i-title-item">Black Coffee Drinker</div>
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Father & Husband</div>
                <div className="i-title-item">Musician & Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I am a full stack software engineer with a passion for creating accessible web applications. I am a father and husband, and I love to play music, write and play with my dogs.
          </p>
        </div>
        </div>
        <div className="i-right">
            <div className="i-background"></div>
            <img src={DKCDEV} alt="Dakota Coppage" className="i-img" />
        </div>
    </div>
    
  );
};

export default Intro;
