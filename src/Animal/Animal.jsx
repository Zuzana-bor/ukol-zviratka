import React from 'react';
import './animal.css';

const Animal = ({ img, name, lat }) => {
  return (
    <div className="animal">
      <div className="animal__image">
        <img src={img} />
      </div>
      <div className="animal__desc">
        <div className="animal__name">{name}</div>
        <div className="animal__latin">{lat}</div>
      </div>
    </div>
  );
};

export default Animal;
