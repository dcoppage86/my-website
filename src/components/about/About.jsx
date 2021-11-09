import React from 'react'
import "./About.css"
import Family from '../../assets/images/Family.JPG'
import FS_Cert from '../../assets/images/FS_Cert.jpg'

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Family} alt="Family Photo" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">A Little About Myself</h1>
                <p className="a-note">
                    Father First | Creator Forever
                </p>
                <p className="a-description">
                    I am a father of four, five if you include our dog. I have been a barber
                    for over 10 years but an artist for as long as I can remember. I like to build things
                    that improve people's lives or at least put a smile on their faces. 
                </p>
                <div className="a-certification">
                    <img src={FS_Cert} alt="Flatiton School Certification" className="a-cert-img" />
                    <div className="a-cert-text">
                        <h4 className="a-cert-title">Flatiron School Certification</h4>
                        <p className="a-cert-description">  I am a certified Full Stack Web Software Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
