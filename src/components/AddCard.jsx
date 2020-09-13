/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import api from '../utils/Api';

const PopupWithForm = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  setCards,
}) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.addCard({ name, link });

    setCards(await api.getCardList());

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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <span id="card-url-error" className="modal__formerror" />
          <button
            className="modal__save-button modal__save"
            type="submit"
            value="save"
         >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};
export default PopupWithForm;
