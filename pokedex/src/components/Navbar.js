import React from 'react';

const Navbar = () => {
    let imgUrl = 
    "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png";

    return (
        <nav>
            <div/>
            <div>
                <img src={imgUrl} alt='pokedex-logo' className='navbar-image'/>
            </div>
            <div/>
        </nav>
    );
};

export default Navbar;
