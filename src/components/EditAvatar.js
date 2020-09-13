/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useContext, useRef } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

const PopupWithForm = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  setCurrentUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.setUserAvatar({ avatar });

    setCurrentUser(await api.getUserInfo());
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
            id="profile-url"
            type="url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="modal__form-profession modal__form-link modal__form-avatar  modal__input"
            name="Imagelink"
            placeholder="Image Link"
            required
          />
          <span id="profile-url-error" className="modal__formerror" />
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
