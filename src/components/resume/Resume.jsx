import React from "react"
import myResume from '../../assets/images/Resume.pdf'
import './Resume.css'

const Resume = () => {
    return (
        <div className="r">
            <div className="resume-wrappper">
                <a className="resume-btn" href={myResume} download="Dakota_Resume">Download My Resume</a>
            </div>    
        </div>
    )
}

export default Resume

