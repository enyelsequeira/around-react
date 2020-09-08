/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ title, image, likeCount, onCardImageClick, card }) => {
  const userInfo = React.useContext(CurrentUserContext);
  const currentUserId = userInfo._id;
  // console.log({ card, currentUserId });
  const isOwn = card.owner._id === currentUserId;

  const cardDeleteButtonClassName = `elements__trash ${
    isOwn ? 'elements__trash_visible' : 'elements__trash_hidden'
  }`;

  const isLiked = card.likes.some((i) => i._id === userInfo._id);
  console.log(isLiked);

  const likeButton = `${
    isLiked ? 'elements__image-heart_active' : 'elements__image-heart'
  }`;

  return (
    <li className="elements__item">
      <div
        className="elements__image"
        onClick={onCardImageClick}
        style={{ backgroundImage: `url(${image})` }}
      />
      <button className={cardDeleteButtonClassName} type="button" />
      <div className="elements__info">
        <h3 className="elements__title">{title}</h3>
        <button className={likeButton} type="button" name="like" />
        <h4 className="elements__like-count">{likeCount}</h4>
      </div>
    </li>
  );
};

export default Card;
