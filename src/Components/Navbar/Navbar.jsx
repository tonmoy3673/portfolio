import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menu,setMenu]=useState('home')
    return (
        <div className='navbar md:pt-2'>
            {/* <img src='/public/assets/logo.svg' alt='logo'/> */}
            <div className='nav-title'>
                <h1>Tonmoy</h1>
                <img src='/public/assets/theme_pattern.svg'/>

            </div>
            <ul className='nav-menu'>
                <li className='hover:text-[#da7c25]'><p onClick={()=>setMenu('home')}>Home</p>{menu==='home'?<img src='/public/assets/nav_underline.svg' alt='underline'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><p onClick={()=>setMenu('about')}>About Me</p>{menu==='about'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><p onClick={()=>setMenu('project')}>Projects</p>{menu==='project'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><p onClick={()=>setMenu('services')}>Services</p>{menu==='services'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><p onClick={()=>setMenu('contact')}>Contact</p>{menu==='contact'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>

            </ul>
            <div className="nav-connect">
                Connect With Me
            </div>

        </div>
    );
};

export default Navbar;