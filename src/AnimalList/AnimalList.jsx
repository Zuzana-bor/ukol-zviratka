import React from 'react';
import './animalList.css';
import Animal from '../Animal/Animal';

const AnimalList = ({ list, setAnimal }) => {
  return (
    <div
      className="animal-list"
      onClick={() => {
        setAnimal(list);
      }}
    >
      {list.map((item) => (
        <Animal img={item.foto} nazev={item.nazev} lat={item.nazevLatinsky} />
      ))}
    </div>
  );
};

export default AnimalList;
