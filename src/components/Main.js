/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

const Main = (props) => {
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
          <button
            className="profile__avatar-overlay"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{userInfo.name}</h2>
          <p className="profile__profession">{userInfo.about}</p>
          <button
            className="profile__info-btn"
            type="button"
            onClick={props.onEditProfile}
          />
        </div>
        <button className="profile__button-add" onClick={props.onAddCard} />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              onCardLike={(card) => {
                props.onCardLike(card);
              }}
              onCardClick={(card) => {
                props.onCardClick(card);
              }}
              onCardDelete={(card) => {
                props.onCardDelete(card);
              }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
