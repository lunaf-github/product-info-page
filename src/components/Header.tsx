import React from 'react';
import Logo  from '../../assets/stackline_logo.svg';

const Header = () => {
    return (
        <header className='header-container'>
            <div className='logo'>
                <Logo />
            </div>
        </header>
    );
}

export default Header;