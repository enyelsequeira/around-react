/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

const PopupWithForm = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  updateUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
    updateUser(name, about);
    // await api.setUserInfo({ name, about });

    // setCurrentUser(await api.getUserInfo());
  };

  return (
    <div
      className={
        isOpen ? `${popupType} modal_active modal` : `${popupType} modal`
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
            id="profile-name"
            className="modal__form-name modal__input"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Jacques"
            required
            maxLength="40"
            minLength="2"
          />
          <span id="profile-name-error" className="modal__formerror" />

          <input
            id="profile-text"
            className="modal__form-profession modal__input"
            type="text"
            name="job"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Explorer"
            required
            maxLength="200"
            minLength="2"
          />
          <span id="profile-text-error" className="modal__formerror" />

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
export default PopupWithForm;
