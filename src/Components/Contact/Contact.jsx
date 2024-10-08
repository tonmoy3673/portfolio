/* eslint-disable react/no-unescaped-entities */

import toast from 'react-hot-toast';
import './Contact.css';
const Contact = () =>{
    const onSubmit = async (event) => {
        event.preventDefault();
        const form=event.target;
        const formData = new FormData(form);
    
        formData.append("access_key", "0feabc17-69c3-4689-adc2-4326df278ffa");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            form.reset()
            toast.success('Email has been sent successfully!!')
            
        }
      };
    
    
   return (
    
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src='/public/assets/theme_pattern.svg' />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src='/public/assets/mail_icon.svg' alt='email' /> <p>meheditonmoy917@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src='/public/assets/call_icon.svg' alt='phone' /> <p>+8801966527486</p>
                    </div>
                    <div className="contact-detail">
                        <img src='/public/assets/location_icon.svg' /> <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            {/* ============ form part =========== */}
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor='name'>Your Name *</label>
                <input type='text' placeholder='Enter your name' name='name' required/>
                <label htmlFor='email'>Your Email *</label>
                <input type='email' placeholder='Enter your email' name='email' required/>
                <label htmlFor='message'>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>

    </div>
)};

export default Contact;