import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src='/public/assets/theme_pattern.svg'/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                <img src='/public/assets/tonmoy.jpg' alt='tonmoy' className=''/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                        {/* <p>I consider myself a quick learner, a self-motivated, responsible, disciplined and deadline-oriented person who can work under pressure and solve problems in a critical situation with analytical knowledge and the latest technology.</p> */}
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:'60%'}}/>
                            </div>
                            <div className="about-skill">
                            <p>Tailwind CSS</p><hr style={{width:'70%'}}/>
                            </div>
                            <div className="about-skill">
                            <p> Bootstrap </p><hr style={{width:'90%'}}/>
                            </div>
                            <div className="about-skill">
                            <p> JavaScript </p><hr style={{width:'70%'}}/>
                            </div>
                            <div className="about-skill">
                            <p> React JS </p><hr style={{width:'70%'}}/>
                            </div>
                            <div className="about-skill">
                            <p> Next JS </p><hr style={{width:'20%'}}/>
                            </div>
                            <div className="about-skill">
                            <p>Node JS </p><hr style={{width:'50%'}}/>
                            </div>
                            <div className="about-skill">
                            <p>Express JS </p><hr style={{width:'50%'}}/>
                            </div>
                            <div className="about-skill">
                            <p>MongoDB </p><hr style={{width:'40%'}}/>
                            </div>
                           
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1.5+</h1>
                    <p>YEARS OF LEARNING EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>25+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
            
        </div>
    );
};

export default About;