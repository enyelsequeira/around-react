/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({ onCardImageClick, onAddCard, onEditAvatar, onEditProfile, cards, setCurrentlySelectedCard, setCards, setIsDeletePlacePopupOpen, handleCardDelete }) => {
  const userInfo = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={userInfo.avatar}
            alt="profile"
          />
          <button className="profile__avatar-overlay" onClick={onEditAvatar} />
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{userInfo.name}</h2>
          <p className="profile__profession">{userInfo.about}</p>
          <button
            className="profile__info-btn"
            type="button"
            onClick={onEditProfile}
          />
        </div>
        <button className="profile__button-add" onClick={onAddCard} />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card
              handleCardDelete={handleCardDelete}
              setIsDeletePlacePopupOpen={setIsDeletePlacePopupOpen}
              key={i}
              card={card}
              onCardImageClick={() => onCardImageClick(card.link, card.name)}
              setCurrentlySelectedCard={setCurrentlySelectedCard}
              setCards={setCards}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
