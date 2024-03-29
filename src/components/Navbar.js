import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <section className='footer-subscription'>
            
            <div className='input-areas'>
              <form>
                <input
                  className='user-input'
                  name='name'
                  type='input'
                  placeholder='Search'
                />
                <Button buttonStyle='btn--outline'>Search</Button>
              </form>
            </div>
          </section>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CLOTH
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/search'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/profile'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>PROFILE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;