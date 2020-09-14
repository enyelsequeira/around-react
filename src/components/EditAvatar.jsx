import React, { useRef } from 'react';
import api from '../utils/Api';

const PopupWithForm = ({
  isOpen,
  popupType,
  onClose,
  heading,
  buttonText,
  setCurrentUser,
}) => {
  const avatarInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.setUserAvatar({ avatar: avatarInputRef.current.value });

    onClose();
    setCurrentUser(await api.getUserInfo());
  };

  return (
    <div
      className={
        isOpen ? `${popupType} modal_active modal` : `${popupType} modal `
      }
    >
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
