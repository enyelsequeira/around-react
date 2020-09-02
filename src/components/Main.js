import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

const Main = ({ onCardImageClick, onAddCard, onEditAvatar, onEditProfile }) => {
  // console.log(props, 22222);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [avatar, setAvatar] = useState('');
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   api.getUserInfo().then((res) => {
  //     setAvatar(res.avatar);
  //     setName(res.name);
  //     setAbout(res.about);
  //   });
  // }, [name, about, avatar]);
  useEffect(() => {
    api.getUserInfo().then((res) => {
      setAvatar(res.avatar);
      setName(res.name);
      setAbout(res.about);
    });
    return () => {
      api.getCardList().then((res) => {
        setCards(res);
      });
    };
  }, [setCards, name, about, avatar]);
  // useEffect(() => {
  //   api.getCardList().then((res) => {
  //     setCards(res);
  //   });
  // }, [setCards]);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" src={avatar} alt="profile" />
          <button className="profile__avatar-overlay" onClick={onEditAvatar} />
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{name}</h2>
          <p className="profile__profession">{about}</p>
          <button className="profile__info-btn" onClick={onEditProfile} />
        </div>
        <button className="profile__button-add" onClick={onAddCard} />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card
              key={i}
              image={card.link}
              title={card.name}
              likeCount={card.likes.length}
              onCardImageClick={() => {
                onCardImageClick(card.link, card.name);
              }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
