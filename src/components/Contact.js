import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

function Contact() {
    return (
        <div className="contact-div">
            <h1 className="contact-h1">Lets Talk</h1>
            <p className="phone"><FaPhone/>270-312-7746</p>
            <p className="email"><FaEnvelope/>dakotacoppagedev@gmail.com</p>
        </div>
    )
}

export default Contact
