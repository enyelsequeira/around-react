/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';

const AddPlacePopup = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  onAddPlace,
}) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNewCardName = (e) => {
    setName(e.target.value);
  };
  const handleNewCardLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
    onClose();
  };

  return (
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
        <form className="modal__form" onSubmit={handleSubmit}>
          <input
            id="card-title"
            className="modal__form-name modal__form-title  modal__input"
            type="text"
            name="Title"
            value={name}
            onChange={handleNewCardName}
            placeholder="title"
            required
            maxLength="30"
            minLength="1"
          />
          <span id="card-title-error" className="modal__formerror" />

          <input
            id="card-url"
            type="url"
            className="modal__form-profession modal__form-link  modal__input"
            name="Imagelink"
            placeholder="image"
            value={link}
            onChange={handleNewCardLink}
            required
          />
          <span id="card-url-error" className="modal__formerror" />
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
};
export default AddPlacePopup;
