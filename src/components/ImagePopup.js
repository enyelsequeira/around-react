/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';

const ImagePopup = (props) => {
  console.log(props);
  return (
    <div className={props.isOpen ? 'modal__figure-image' : 'modal figure'}>
      <div className="modal__figure-container">
        <button
          className="modal__close modal__figure-exit"
          onClick={props.onClose}
        />
        <img
          className="modal__figure-image"
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <p className="modal__figure-caption">{props.title}</p>
      </div>
    </div>
  );
};

export default ImagePopup;
