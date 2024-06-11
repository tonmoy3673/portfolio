
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                <div className='footer-title'>
                <h1>Tonmoy</h1>
                <img src='/public/assets/theme_pattern.svg'/>

            </div>
            
            <p>I am Mehedi Hasan Tonmoy,
            A passionate Front-End Developer from Bangladesh.</p>
                </div>
                <div className="footer-top-right">
                   <a href='https://www.facebook.com/mehedihasan.tonmoy.7161/' target='_blank'> <FaFacebook className='md:mt-10 text-4xl rounded-full hover:text-[#da7c25]'/></a>
                   <a href='https://github.com/tonmoy3673' target='_blank'> <FaGithub className='md:mt-10 text-4xl rounded-full hover:text-[#da7c25]'/></a>
                   <a href='https://www.linkedin.com/in/mehedi-hasan-tonmoy/' target='_blank'> <FaLinkedin className='md:mt-10 text-4xl rounded-full hover:text-[#da7c25]'/></a>
                   
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                © 2024 Mehedi Hasan Tonmoy. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;