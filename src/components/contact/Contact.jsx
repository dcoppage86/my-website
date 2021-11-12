import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_soagcoc', 'template_sun4uvl', formRef.current, 'user_nbVQ01hXlNAB5h2yhEh0k')
      .then((result) => {
          console.log(result.text);
            setFormData(true);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-background"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Get In Touch</h1>
                    <div className="c-info-item">
                        <div className="c-icon"><FontAwesomeIcon icon={faPhone} /> (270) 312-7746</div>
                    </div>
                    <div className="c-info-item">
                        <div className="c-icon"><FontAwesomeIcon icon={faEnvelope} /> dakotacoppagedev@gmail.com</div>
                    </div>
                    <div className="c-info-item">
                        <div className="c-icon"><FontAwesomeIcon icon={faMapMarker} /> Denver, CO</div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>You Can Contact Me Directly Through Here As Well</b> Let's get in touch!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="c-form">
                        <input type="text" placeholder="Name" name="user_name"/>
                        <br></br>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <br></br>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <br></br>
                        <textarea rows="5" name="message" placeholder="Message"></textarea>
                        <br></br>
                        <button>Submit</button>
                        {formData && <p className="c-form-success">Message Sent!</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
