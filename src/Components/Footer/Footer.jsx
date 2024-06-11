
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                <div className='nav-title'>
                <h1>Tonmoy</h1>
                <img src='/public/assets/theme_pattern.svg'/>

            </div>
            <p>I am Mehedi Hasan Tonmoy,
            A passionate Front-End Developer from Bangladesh</p>
                </div>
                <div className="footer-top-right">
                   <a href='https://www.facebook.com/mehedihasan.tonmoy.7161/' target='_blank'> <FaFacebook/></a>
                   <a href='https://github.com/tonmoy3673' target='_blank'> <FaGithub/></a>
                   <a href='https://www.linkedin.com/in/mehedi-hasan-tonmoy/' target='_blank'> <FaLinkedin/></a>
                   
                </div>
            </div>
            
        </div>
    );
};

export default Footer;