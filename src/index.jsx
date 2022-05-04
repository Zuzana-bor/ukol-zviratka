import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import './style.css';
import AnimalList from './AnimalList/AnimalList';
import AnimalDetail from './AnimalDetail/AnimalDetail';

const App = () => {
  const [display, setDisplay] = useState([]);
  const selectAnimal = (e) => {
    setDisplay(e.target.value);
    console.log(display);
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
        <AnimalList list={display} selectAnimal={selectAnimal} />
        <AnimalDetail
          name={display.nazev}
          lat={display.nazevLatinsky}
          img={display.foto}
          popis={display.popis}
        />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
