/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Card = ({ title, image, likeCount, onCardImageClick }) => {
  console.log(title);

  return (
    <li className="elements__item">
      <div
        className="elements__image"
        onClick={onCardImageClick}
        style={{ backgroundImage: `url(${image})` }}
      />
      <button className="elements__trash" type="button" />
      <div className="elements__info">
        <h3 className="elements__title">{title}</h3>
        <button className="elements__image-heart" type="button" name="like" />
        <h4 className="elements__like-count">{likeCount}</h4>
      </div>
    </li>
  );
};

export default Card;
