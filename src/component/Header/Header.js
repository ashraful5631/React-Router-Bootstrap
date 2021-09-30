import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-dark p-2'>
            <NavLink className='m-4 text-decoration-none text-light'
                activeStyle={{
                    fontWeight: "bold",
                    borderBottom: '1px solid red'
                }}
                to='/home'>Home</NavLink>

            <NavLink className='m-4 text-decoration-none text-light '
                activeStyle={{
                    fontWeight: "bold",
                    borderBottom: '1px solid red'

                }}
                to='/resturent'>Resturent</NavLink>

            <NavLink className='m-4 text-decoration-none text-light'
                activeStyle={{
                    fontWeight: "bold",
                    borderBottom: '1px solid red'
                }}
                to='/about'>About</NavLink>
        </nav>
    );
};

export default Header;