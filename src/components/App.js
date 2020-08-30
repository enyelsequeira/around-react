/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

const App = () => {
  const [isOverLayon, setIsOverLayOn] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageBackground, setImageBackground] = useState('');
  const [imageCaption, setImageCaption] = useState('');

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={() => {
          setIsEditAvatarPopupOpen(true);
          setIsOverLayOn(true);
        }}
        onEditProfile={() => {
          setIsEditProfilePopupOpen(true);
          setIsOverLayOn(true);
        }}
        onAddCard={() => {
          setIsAddPlacePopupOpen(true);
          setIsOverLayOn(true);
        }}
        onCardClick={(link, caption) => {
          setIsImageOpen(true);
          setImageBackground(link);
          setImageCaption(caption);
          setIsOverLayOn(true);
        }}
      />
      <PopupWithForm title="Edit profile" name="edit" />
      <ImagePopup />

      <template className="elements__template">
        <li className="elements__item">
          <div className="elements__image" />
          <button className="elements__trash" />
          <div className="elements__info">
            <h3 className="elements__title" />
            <button className="elements__image-heart" />
            <h4 className="elements__like-count">0</h4>
          </div>
        </li>
      </template>

      <Footer />
    </div>
  );
};
export default App;
