import React from 'react';

const Main = () => (
  <main>
    <section className="profile">
      <div className="profile__avatar">
        <img className="profile__avatar-image" src="./images/profile.png" alt="profile" />
        <button className="profile__avatar-overlay" />
      </div>
      <div className="profile__info">
        <h2 className="profile__name"> </h2>
        <p className="profile__profession" />
        <button className="profile__info-btn"> </button>
      </div>
      <button className="profile__button-add"> </button>
    </section>
    <section className="elements">
      <ul className="elements__list" />
    </section>
  </main>
);

export default Main;
