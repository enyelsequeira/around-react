import React from 'react';

const PopupWithForm = ({
  isOpen,
  popupType,
  onClose,
  heading,
  children,
  buttonText,
}) => (
  // console.log(props.popupType, props.isOpen);
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
        {children}
        <button
          className="modal__save-button modal__save"
          type="submit"
          value="save">
          {buttonText}
        </button>
      </form>
    </div>
  </div>
);
export default PopupWithForm;
