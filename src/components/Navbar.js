import React from 'react';
import NavbarItem from './NavbarItem';
import '../stylesheets/Navbar.css';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <NavbarItem justifyContent='flex-start'>
        Search
      </NavbarItem>
      <NavbarItem justifyContent='center' textAlign='center'>
        {props.title}
      </NavbarItem>
      <NavbarItem justifyContent='flex-end' textAlign='right'>
        User
      </NavbarItem>
    </div>
  );
};

export default Navbar;
