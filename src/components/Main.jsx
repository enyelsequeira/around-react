/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({ onCardImageClick, onAddCard, onEditAvatar, onEditProfile }) => {
  const [userData, setUserData] = useState({});
  const [cards, setCards] = useState([]);

  const userInfo = React.useContext(CurrentUserContext);

  useEffect(() => {
    api.getCardList().then((res) => {
      // console.log(res);
      setCards(res);
    });
  }, []);

  const handleCardDelete = (card) => {
    // console.log(card.owner);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const [fetchedData, fetchedCards] = await Promise.all([
  //       api.getUserInfo(),
  //       api.getCardList(),
  //     ]);

  //     setUserData(fetchedData);
  //     setCards(fetchedCards);
  //   };

  //   fetchData();
  // }, []);

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
              key={i}
              card={card}
              image={card.link}
              title={card.name}
              likeCount={card.likes.length}
              onCardImageClick={() => {
                onCardImageClick(card.link, card.name);
              }}
              onCardDelete={handleCardDelete(card)}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
