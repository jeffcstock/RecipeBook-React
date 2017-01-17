import React from 'react';

const NavbarItem = (props) => {
  const styles = {
    navbarItemStyle: {
      fontFamily: 'Crimson Text',
      justifyContent: props.justifyContent,
      flexGrow: 1,
      flexBasis: 1,
      textAlign: props.textAlign,
      padding: 20,
    }
  };

  return (
    <div style={styles.navbarItemStyle}>
      {props.children}
    </div>
  );
};

export default NavbarItem;
