import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar md:pt-2'>
            {/* <img src='/public/assets/logo.svg' alt='logo'/> */}
            <div className='nav-title'>
                <h1>Tonmoy</h1>
                <img src='/public/assets/theme_pattern.svg'/>

            </div>
            <ul className='nav-menu'>
                <li className='hover:text-[#da7c25]'>Home</li>
                <li className='hover:text-[#da7c25]'>About Me</li>
                <li className='hover:text-[#da7c25]'>Projects</li>
                <li className='hover:text-[#da7c25]'>Contact</li>

            </ul>
            <div className="nav-connect">
                Connect With Me
            </div>

        </div>
    );
};

export default Navbar;