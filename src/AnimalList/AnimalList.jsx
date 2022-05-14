import React from 'react';
import './animalList.css';
import Animal from '../Animal/Animal';

const AnimalList = ({ list, setAnimal }) => {
  return (
    <div className="animal-list">
      {list.map((item) => (
        <ul
          onClick={() => {
            setAnimal(item);
          }}
        >
          <Animal
            key={item.id}
            img={item.foto}
            nazev={item.nazev}
            lat={item.nazevLatinsky}
          />
        </ul>
      ))}
    </div>
  );
};

export default AnimalList;
