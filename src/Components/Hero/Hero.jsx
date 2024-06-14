import './Hero.css';

const Hero = () => {
    return (
        <div id='home' className="hero md:flex items-center gap-[30px] justify-center mx-[170px]">
            <div>
            <h1><span className='hero-title text-center'>I am Mehedi Hasan Tonmoy,</span><br/>A passionate Front-End Developer from Bangladesh</h1>
            <p className='hero-text text-center'>I have a ton of prior experience in web development from the Front-End point of view and am well-versed in coding for both Single Page Applications and larger multiple paged Websites.</p>
            <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
            </div>
            </div>
            
            <img src="/public/assets/hero.png" className="w-5/12"/>
            
        </div>
    );
};

export default Hero;