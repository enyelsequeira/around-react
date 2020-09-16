/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopUpWithForm';
import AddCard from './AddPlacePopup';
import EditProfile from './EditProfilePopup';
import EditAvatar from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    avatar: '',
    name: '',
    about: '',
  });
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardLike = async (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    await api.changeLikeCardStatus(card._id, !isLiked);

    setCards(await api.getCardList());
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, [setCards, cards]);

  // deleting card

  const handleDeleteCard = (card) => {
    api
      .removeCard(card._id)
      .then(() => setCards([...cards]))
      .catch((err) => console.log(err));
    // api
    //   .removeCard(card._id)
    //   .then(setCards(cards))
    //   .catch((err) => console.log(err));
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  }
  const onAddPlace = (newCard) => {
    api
      .addCard(newCard)
      .then((newOne) => setCards([...cards, newOne]))
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };
  function handleUpdateAvatar(avatar) {
    setCurrentUser({ ...currentUser, avatar });

    api
      .setUserAvatar({ avatar })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  const updateUser = (name, about) => {
    api
      .setUserInfo({ name, about })
      .then((data) => {
        console.log(data);
        setCurrentUser({ ...currentUser, name: data.name, about: data.about });
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err));
    // setCurrentUser({ ...currentUser, name, about });

    // api
    //   .setUserInfo({ name, about })
    //   .then(() => {
    //     closeAllPopups();
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={() => {
            setIsEditProfilePopupOpen(true);
          }}
          onAddCard={() => {
            setIsAddPlacePopupOpen(true);
          }}
          onEditAvatar={() => {
            setIsEditAvatarPopupOpen(true);
          }}
          selectedCard={selectedCard}
          onClose={closeAllPopups}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCard}
          onCardClick={(card) => handleCardClick(card)}
        />

        <EditProfile
          heading="Edit Profile"
          buttonText="Save"
          popupType="modal__edit"
          isOpen={isEditProfilePopupOpen}
          onClose={() => setIsEditProfilePopupOpen(false)}
          updateUser={updateUser}
        />

        <AddCard
          heading="New Place"
          buttonText="Create"
          popupType="modal__card"
          isOpen={isAddPlacePopupOpen}
          setCards={setCards}
          onClose={() => setIsAddPlacePopupOpen(false)}
          onAddPlace={onAddPlace}
        />

        <PopupWithForm
          heading="Are you sure"
          buttonText="yes"
          popupType="modal__deleteimage"
          isOpen={isDeletePlacePopupOpen}
          setCards={setCards}
          // currentlySelectedCard={currentlySelectedCard}
          onClose={() => setIsDeletePlacePopupOpen(false)}
        />

        <EditAvatar
          heading="Change Profile Picture"
          buttonText="Save"
          popupType="modal__addimage"
          setCurrentUser={setCurrentUser}
          isOpen={isEditAvatarPopupOpen}
          onClose={() => setIsEditAvatarPopupOpen(false)}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
