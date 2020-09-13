/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopUpWithForm';
import AddCard from './AddCard';
import EditProfile from './EditProfile';
import EditAvatar from './EditAvatar';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageBackground, setImageBackground] = useState('');
  const [imageCaption, setImageCaption] = useState('');

  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);
  const [currentlySelectedCard, setCurrentlySelectedCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedData, fetchedCards] = await Promise.all([api.getUserInfo(), api.getCardList()]);

      setCurrentUser(fetchedData);
      setCards(fetchedCards);
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {/* {console.log(currentUser)} */}
        <Header />
        <Main
          setCurrentlySelectedCard={setCurrentlySelectedCard}
          setIsDeletePlacePopupOpen={setIsDeletePlacePopupOpen}
          cards={cards}
          setCards={setCards}
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

        <EditProfile
          heading="Edit Profile"
          buttonText="Save"
          popupType="modal__edit"
          isOpen={isEditProfilePopupOpen}
          onClose={() => setIsEditProfilePopupOpen(false)}
          setCurrentUser={setCurrentUser}
        />

        <AddCard
          heading="New Place"
          buttonText="Create"
          popupType="modal__card"
          isOpen={isAddPlacePopupOpen}
          setCards={setCards}
          onClose={() => setIsAddPlacePopupOpen(false)}
        />

        <PopupWithForm
          heading="Are you sure"
          buttonText="yes"
          popupType="modal__deleteimage"
          isOpen={isDeletePlacePopupOpen}
          setCards={setCards}
          currentlySelectedCard={currentlySelectedCard}
          onClose={() => setIsDeletePlacePopupOpen(false)}
        />

        <EditAvatar
          heading="Change Profile Picture"
          buttonText="Save"
          popupType="modal__addimage"
          setCurrentUser={setCurrentUser}
          isOpen={isEditAvatarPopupOpen}
          onClose={() => setIsEditAvatarPopupOpen(false)}
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
