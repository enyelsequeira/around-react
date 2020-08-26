import React from 'react';

const ImagePopup = () => (
  <div className="modal figure">
    <div className="modal__figure-container">
      <button className="modal__close modal__figure-exit" />
      <img className="modal__figure-image" />
      <p className="modal__figure-caption" />
    </div>
  </div>
);

export default ImagePopup;
