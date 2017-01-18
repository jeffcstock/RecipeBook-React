import React from 'react';
import Title from './Title';

const Card = ({ recipe }) => {
  return (
    <div>
      <Title fontSize={30} text={recipe.title} />
    </div>
  );
};

export default Card;
