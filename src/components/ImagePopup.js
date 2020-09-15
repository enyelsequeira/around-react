/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';

const ImagePopup = (props) => (
  // console.log(props);

  <div
    className={`modal figure  ${
      props.card !== '' ? 'modal figure modal_active' : ''
    }`}>
    <div className="modal__figure-container">
      <button
        className="modal__close modal__figure-exit"
        onClick={props.onClose}
      />
      <img
        className="modal__figure-image"
        src={`${props.card.link}`}
        // onClick={isOpen}
        alt={props.card.name}
      />
      <p className="modal__figure-caption">{props.card.name}</p>
    </div>
  </div>
);
export default ImagePopup;
