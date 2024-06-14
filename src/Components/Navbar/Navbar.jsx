import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
                <li className='hover:text-[#da7c25]'><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src='/public/assets/nav_underline.svg' alt='underline'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('project')}>Projects</p></AnchorLink>{menu==='project'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>
                <li className='hover:text-[#da7c25]'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src='/public/assets/nav_underline.svg'/>:<></>}</li>

            </ul>
            <div className="nav-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink>
            </div>

        </div>
    );
};

export default Navbar;