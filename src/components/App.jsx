/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageBackground, setImageBackground] = useState('');
  const [imageCaption, setImageCaption] = useState('');

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await api.getUserInfo();
      setCurrentUser(userInfo);
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {/* {console.log(currentUser)} */}
        <Header />
        <Main
          onEditAvatar={() => {
            setIsEditAvatarPopupOpen(true);
          }}
          onEditProfile={() => {
            setIsEditProfilePopupOpen(true);
          }}
          onAddCard={() => {
            setIsAddPlacePopupOpen(true);
          }}
          onCardImageClick={(link, caption) => {
            setIsImageOpen(true);
            setImageBackground(link);
            setImageCaption(caption);
          }}
        />

        <PopupWithForm
          heading="Edit Profile"
          buttonText="Save"
          popupType="modal__edit"
          isOpen={isEditProfilePopupOpen}
          onClose={() => {
            setIsEditProfilePopupOpen(false);
          }}
        >
          <input
            id="profile-name"
            className="modal__form-name modal__input"
            type="text"
            name="name"
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
            placeholder="Explorer"
            required
            maxLength="200"
            minLength="2"
          />
          <span id="profile-text-error" className="modal__formerror" />
        </PopupWithForm>

        <PopupWithForm
          heading="New Place"
          buttonText="Create"
          popupType="modal__card"
          isOpen={isAddPlacePopupOpen}
          onClose={() => {
            setIsAddPlacePopupOpen(false);
          }}
        >
          <input
            id="card-title"
            className="modal__form-name modal__form-title  modal__input"
            type="text"
            name="Title"
            value="ImageTitle"
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
            value="image"
            required
          />
          <span id="card-url-error" className="modal__formerror" />
        </PopupWithForm>

        <PopupWithForm
          heading="Change Profile Picture"
          buttonText="Save"
          popupType="modal__addimage"
          isOpen={isEditAvatarPopupOpen}
          onClose={() => {
            setIsEditAvatarPopupOpen(false);
          }}
        >
          <input
            id="profile-url"
            type="url"
            className="modal__form-profession modal__form-link modal__form-avatar  modal__input"
            name="Imagelink"
            placeholder="Image Link"
            required
          />
          <span id="profile-url-error" className="modal__formerror" />
        </PopupWithForm>
        <PopupWithForm
          heading="Are you sure"
          buttonText="yes"
          popupType="modal__deleteimage"
        />

        <ImagePopup
          isOpen={isImageOpen}
          title={imageCaption}
          image={imageBackground}
          onClose={() => {
            setIsImageOpen(false);
          }}
        />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
};
export default App;
