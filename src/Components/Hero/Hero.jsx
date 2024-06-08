import './Hero.css';

const Hero = () => {
    return (
        <div className="hero md:flex items-center gap-[30px]">
            <div>
            <h1>I am Mehedi Hasan Tonmoy, A passionate Front-End Developer from Bangladesh</h1>
            <p>I have a ton of prior experience in web development from the Front-End point of view and am well-versed in coding for both Single Page Applications and larger multiple paged Websites.</p>
            <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
            </div>
            </div>
            <div>
            <img src="/public/assets/hero.png" className="w-72 rounded-full mx-auto"/>
            </div>
        </div>
    );
};

export default Hero;