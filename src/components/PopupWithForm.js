import React from 'react';

const PopupWithForm = (props) => (
  // console.log(props.popupType, props.isOpen);
  <div
    // className={`props.isOpen ? ${props.popupType} && 'modal__active' : 'modal'`}
    className={
      props.isOpen
        ? `${props.popupType} modal_active modal`
        : `${props.popupType} modal `
    }>
    <div className="modal__info">
      <button
        className="modal__close"
        aria-label="close modal"
        data-close
        onClick={props.onClose}
      />
      <p className="modal__title"> {props.heading}</p>
      <form className="modal__form">
        {props.children}
        <button
          className="modal__save-button modal__save"
          type="submit"
          value="save">
          {props.buttonText}
        </button>
      </form>
    </div>
  </div>
);
export default PopupWithForm;
