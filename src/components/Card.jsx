/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card: { owner, link, name, likes }, onCardImageClick }) => {
  const userInfo = React.useContext(CurrentUserContext);
  const currentUserId = userInfo._id;
  // console.log({ card, currentUserId });
  const isOwn = owner._id === currentUserId;

  const cardDeleteButtonClassName = `elements__trash ${
    isOwn ? 'elements__trash_visible' : 'elements__trash_hidden'
  }`;

  const isLiked = likes.some((i) => i._id === userInfo._id);
  console.log(isLiked);

  const likeButton = `${
    isLiked ? 'elements__image-heart_active' : 'elements__image-heart'
  }`;

  return (
    <li className="elements__item">
      <div
        className="elements__image"
        onClick={onCardImageClick}
        style={{ backgroundImage: `url(${link})` }}
      />
      <button className={cardDeleteButtonClassName} type="button" />
      <div className="elements__info">
        <h3 className="elements__title">{name}</h3>
        <button className={likeButton} type="button" name="like" />
        <h4 className="elements__like-count">{likes.length}</h4>
      </div>
    </li>
  );
};

export default Card;
