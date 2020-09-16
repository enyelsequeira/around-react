import React, { useRef, useContext, useState } from 'react';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

const EditAvatarPopup = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  setCurrentUser,
  onUpdateAvatar,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const avatarInputRef = useRef(avatar);

  function handleAvatarChange(e) {
    setAvatar(avatarInputRef.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar);
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await api.setUserAvatar({ avatar: avatarInputRef.current.value });

  //   onClose();
  //   setCurrentUser(await api.getUserInfo());
  // };

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
            ref={avatarInputRef}
            onChange={handleAvatarChange}
            id="profile-url"
            type="url"
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
export default EditAvatarPopup;
