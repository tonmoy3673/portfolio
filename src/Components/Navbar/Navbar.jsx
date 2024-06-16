import { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
    const [menu,setMenu]=useState('home')
    const menuRef=useRef();
    const openMenu=()=>{
        menuRef.current.style.right='0px';
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px"
    }
    return (
        <div className='navbar md:pt-2'>
            {/* <img src='/public/assets/logo.svg' alt='logo'/> */}
            <div className='nav-title'>
                <h1>Tonmoy</h1>
                <img src='/public/assets/theme_pattern.svg'/>

            </div>
            <img onClick={openMenu} src='/public/assets/menu_open.svg' className='nav-mob-open' alt='nav-open'/>
            <ul ref={menuRef} className='nav-menu'>
                <img onClick={closeMenu} src="/public/assets/menu_close.svg" alt="nav-close" className="nav-mob-close" />
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