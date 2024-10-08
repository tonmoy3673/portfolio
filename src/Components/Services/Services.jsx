
import './Services.css';
const Services = () => {
    return (
        <div id='services' className='services'>
            <div className='services-banner'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src='/public/assets/theme_pattern.svg'/>
            </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 services-container gap-16 justify-center items-center text-center ">
               <div className='services-format'>
              
                <h1>Web Design</h1>
               
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src='/public/assets/arrow_icon.svg'/>
                </div>
               </div>
               <div className='services-format'>
              
                <h1>Web Development</h1>
            
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src='/public/assets/arrow_icon.svg'/>
                </div>
               </div>
               <div className='services-format'>
               
                <h1>Content Writing</h1>
               
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src='/public/assets/arrow_icon.svg'/>
                </div>
               </div>
            </div>

            
              
           

            
               
            
            
        </div>
    );
};

export default Services;