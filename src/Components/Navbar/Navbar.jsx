import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src='/public/assets/logo.svg' alt='logo'/>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>

            </ul>

        </div>
    );
};

export default Navbar;