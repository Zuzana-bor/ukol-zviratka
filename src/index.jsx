import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import './style.css';
import AnimalList from './AnimalList/AnimalList';
import AnimalDetail from './AnimalDetail/AnimalDetail';

const App = () => {
  const [display, setDisplay] = useState([]);
  const [detail, setDetail] = useState([]);

  const setAnimal = (animal) => {
    setDetail(animal);
    console.log(detail);
  };

  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then((response) => response.json())
      .then((data) => {
        setDisplay(data.zvirata);
      }, []);
  });
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList list={display} setAnimal={setAnimal} />
        <AnimalDetail detail={detail} />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
