/* eslint-disable react/no-unescaped-entities */

import './Contact.css';
const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src='/public/assets/theme_pattern.svg'/> 
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;