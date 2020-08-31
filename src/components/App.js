/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

const App = () => {
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
        }}
        onEditProfile={() => {
          setIsEditProfilePopupOpen(true);
        }}
        onAddCard={() => {
          setIsAddPlacePopupOpen(true);
        }}
        onCardClick={(link, caption) => {
          console.log(link, caption, 'helloooo');
          setIsImageOpen(true);
          setImageBackground(link);
          setImageCaption(caption);
        }}
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
    </div>
  );
};
export default App;
