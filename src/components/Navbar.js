import React from 'react';
import NavbarItem from './NavbarItem';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarItem justifyContent='flex-start'>
        Searchsdfsfsdfsdasdfakjlsdfhkljasdhjlkdf
      </NavbarItem>
      <NavbarItem justifyContent='center' textAlign='center'>
        Recipe Book
      </NavbarItem>
      <NavbarItem justifyContent='flex-end' textAlign='right'>
        User
      </NavbarItem>
    </div>
  );
};

export default Navbar;
