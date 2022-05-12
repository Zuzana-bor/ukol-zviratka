import React from 'react';
import './animalDetail.css';
import AnimalList from '../AnimalList/AnimalList';

const AnimalDetail = ({ display }) => {
  return (
    <div className="detail">
      <div className="detail__content">
        <div className="detail__header">
          <img className="detail__image" src="./images/slon.jpg" alt="xxx" />
          <div className="detail__title">
            <h2 className="detail__name">
              <span>{display.nazev}</span>
            </h2>
            <div className="detail__latin">
              <span>{display.nazevLatinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__desc">{display.popis}</p>

          <div className="detail__items">
            <div className="detail__item">
              <h3>Domovina</h3>
              <p>{display.domovina}</p>
            </div>
            <div className="detail__item">
              <h3>Biotop</h3>
              <p>{display.biotop}</p>
            </div>
            <div className="detail__item">
              <h3>Potrava</h3>
              <p>{display.potrava}</p>
            </div>
            <div className="detail__item">
              <h3>Velikost</h3>
              <p>{display.velikost}</p>
            </div>
          </div>

          <div className="detail__zoo">
            <h3>Najdete v těchto ZOO</h3>
            <p>Praha, Dvůr Králové, Olomouc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
