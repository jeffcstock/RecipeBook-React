import React from 'react';


const Title = (props) => {
  const styles = {
    titleStyle: {
      fontFamily: 'Crimson Text',
      fontSize: props.fontSize,
    }
  };

  return (
    <div>
      <h1 style={styles.titleStyle}>{props.text}</h1>
    </div>
  );
};

export default Title;
