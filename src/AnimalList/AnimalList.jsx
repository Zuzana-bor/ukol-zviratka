import React from 'react';
import './animalList.css';
import Animal from '../Animal/Animal';

const AnimalList = ({ list, selectAnimal }) => {
  return (
    <div className="animal-list">
      {list.map((item) => (
        <Animal
          img={item.foto}
          name={item.nazev}
          lat={item.nazevLatinsky}
          onClick={() => {
            selectAnimal();
          }}
        />
      ))}
    </div>
  );
};

export default AnimalList;
