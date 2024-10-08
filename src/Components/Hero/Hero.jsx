import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero md:flex items-center md:gap-[30px] justify-center text-center md:text-start lg:mx-[170px]"
    >
      <div className="flex lg:flex-row flex-col-reverse">
        <div>
          <h1>
            <span className="hero-title text-center">
              I am Mehedi Hasan Tonmoy,
            </span>
            <br />A passionate Front-End Developer from Bangladesh
          </h1>
          <p className="hero-text text-center">
            I have a ton of prior experience in web development from the
            Front-End point of view and am well-versed in coding for both Single
            Page Applications and larger multiple paged Websites.
          </p>
          <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                {" "}
                Connect with me
              </AnchorLink>
            </div>
            <div className="hero-resume">My Resume</div>
          </div>
        </div>
      

      <div>
        <img
          src="/public/assets/hero.png"
          className="w-3/5 md:w-8/12 !mx-auto md:mx-0"
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;
