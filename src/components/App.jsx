/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopUpWithForm';
import AddCard from './AddPlacePopup';
import EditProfile from './EditProfile';
import EditAvatar from './EditAvatar';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageBackground, setImageBackground] = useState('');
  const [imageCaption, setImageCaption] = useState('');

  const [currentUser, setCurrentUser] = useState({ avatar: '', name: '', about: '' });
  const [cards, setCards] = useState([]);
  // const [currentlySelectedCard, setCurrentlySelectedCard] = useState([]);

  const updateUser = (name, about) => {
    setCurrentUser({ ...currentUser, name, about });

    api.setUserInfo({ name, about }).catch((err) => console.log(err));
  };

  // const updateAvatar = (avatar) => {
  //   setCurrentUser({
  //     name: currentUser.name,
  //     about: currentUser.about,
  //     avatar,
  //   });

  //   api.setUserAvatar({ avatar });
  // };

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    }).catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const [fetchedData, fetchedCards] = await Promise.all([api.getUserInfo(), api.getCardList()]);

  //     setCurrentUser(fetchedData);
  //     setCards(fetchedCards);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    api.getCardList().then((res) => {
      setCards(res);
    }).then((err) => console.log(err));
  }, [setCards, cards]);

  const onAddPlace = (newCard) => {
    api.addCard(newCard);
  };
  // deleting card

  const handleDeleteCard = (card) => {
    api.removeCard(card._id).then(
      setCards(cards),
    ).catch((err) => console.log(err));
  };

  const onCardImageClick = (link, caption) => {
    setIsImageOpen(true);
    setImageBackground(link);
    setImageCaption(caption);
  };
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {/* {console.log(currentUser)} */}
        <Header />
        <Main
          // setCurrentlySelectedCard={setCurrentlySelectedCard}
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

        >
          {cards.map((card, i) => (
            <Card
              handleDeleteCard={() => { handleDeleteCard(card); }}
              setIsDeletePlacePopupOpen={setIsDeletePlacePopupOpen}
              key={i}
              card={card}
              onCardImageClick={() => onCardImageClick(card.link, card.name)}
              // setCurrentlySelectedCard={setCurrentlySelectedCard}
              setCards={setCards}
            />
          ))}
        </Main>

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
          // updateAvatar={updateAvatar}
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
