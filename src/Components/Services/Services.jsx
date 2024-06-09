
import './Services.css';
const Services = () => {
    return (
        <div className='services'>
            <div className='services-banner'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src='/public/assets/theme_pattern.svg'/>
            </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 services-container gap-16 justify-center text-center ">
               <div className='services-format py-12'>
               <h3>01</h3>
                <h1>Web Design</h1>
               
                <div className="services readmore flex">
                    <p>Read More</p>
                    <img src='/public/assets/arrow_icon.svg'/>
                </div>
               </div>
               <div className='services-format'>
               <h3>02</h3>
                <h1>Web Development</h1>
            
                <div className="services readmore">
                    <p>Read More</p>
                    <img src='/public/assets/arrow_icon.svg'/>
                </div>
               </div>
               <div className='services-format'>
               <h3>03</h3>
                <h3>Content Writing</h3>
               
                <div className="services readmore">
                    <p>Read More</p>
                    <img src='/public/assets/arrow_icon.svg'/>
                </div>
               </div>
            </div>

            
              
           

            
               
            
            
        </div>
    );
};

export default Services;