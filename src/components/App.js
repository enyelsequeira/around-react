/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

const App = () => {
  const [isEditProfilPopupOpen, setIsEditProfilPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditProfilPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  return (

    <div className="page">
      <Header />
      <Main isEditProfilPopupOpen={isEditProfilPopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} />
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

      <footer className="footer">
        <p className="footer__text"> &#169; 2020 Around The U.S </p>
      </footer>

    </div>

  );
};
export default App;
