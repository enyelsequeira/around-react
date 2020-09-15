/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const PopupWithForm = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  currentlySelectedCard,
  setCards,
}) => (
  <div
    className={
        isOpen ? `${popupType} modal_active modal` : `${popupType} modal `
      }>
    <div className="modal__info">
      <button
        className="modal__close"
        aria-label="close modal"
        data-close
        type="button"
        onClick={onClose}
        />
      <p className="modal__title"> {heading}</p>
      <form className="modal__form">
        <button
          className="modal__save-button modal__save"
          value="save"
          type="button"
         >
          {buttonText}
        </button>
      </form>
    </div>
  </div>
);
export default PopupWithForm;
