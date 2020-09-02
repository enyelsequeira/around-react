/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';

const ImagePopup = ({ isOpen, onClose, image, title }) => (
  <div className={isOpen ? 'modal figure modal_active' : 'modal figure'}>
    <div className="modal__figure-container">
      <button className="modal__close modal__figure-exit" onClick={onClose} />
      <img className="modal__figure-image" src={image} onClick={isOpen} />
      <p className="modal__figure-caption">{title}</p>
    </div>
  </div>
);
export default ImagePopup;
