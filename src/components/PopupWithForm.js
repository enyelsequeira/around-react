import React from 'react';

const PopupWithForm = () => (
        <div>
            
    <div className="modal modal__edit">
      <div className="modal__info">
        <button className="modal__close" aria-label="close modal" data-close />
        <p className="modal__title"> Edit Profile</p>
        <form className="modal__form">
          <input id="profile-name" className="modal__form-name modal__input" type="text" name="name" placeholder="Jacques" required maxLength="40" minLength="2" />
          <span id="profile-name-error" className="modal__formerror" />

          <input id="profile-text" className="modal__form-profession modal__input" type="text" name="job" placeholder="Explorer" required maxLength="200" minLength="2" />
          <span id="profile-text-error" className="modal__formerror" />
          <button className="modal__save-button modal__save" type="submit" value="save"> Save </button>
        </form>
      </div>
    </div>

    <div className="modal modal__card">
      <div className="modal__info">
        <button className="modal__close modal__card-close" aria-label="close modal" data-close />
        <p className="modal__title"> New Place</p>
        <form className="modal__form">
          <input id="card-title" className="modal__form-name modal__form-title  modal__input" type="text" name="Title" value="ImageTitle" required maxLength="30" minLength="1" />
          <span id="card-title-error" className="modal__formerror" />

          <input id="card-url" type="url" className="modal__form-profession modal__form-link  modal__input" name="Imagelink" value="image" required />
          <span id="card-url-error" className="modal__formerror" />

          <button className="modal__save-button modal__form-create modal__save" type="submit" value="save"> Create </button>
        </form>
      </div>
    </div>

    <div className="modal modal__addimage">
      <div className="modal__info">
        <button className="modal__close" aria-label="close modal" data-close />
        <p className="modal__title"> Change Profile Picture</p>
        <form className="modal__form">
          <input id="profile-url" type="url" className="modal__form-profession modal__form-link modal__form-avatar  modal__input" name="Imagelink" placeholder="Image Link" required />
          <span id="profile-url-error" className="modal__formerror" />
          <button className="modal__save-button modal__save" type="submit" value="save"> Save </button>
        </form>
      </div>
    </div>

    <div className="modal modal__deleteimage">
      <div className="modal__info">
        <button className="modal__close" aria-label="close modal" data-close />

        <form className="modal__form">
          <p className="modal__title"> Are you sure?</p>
          <button className="modal__save-button " type="submit" value="save"> Yes </button>
        </form>
      </div>
    </div>
        </div>
    );

export default PopupWithForm;

// import React from 'react';

// const PopupWithForm = ({ title, name, children }) => (
//   <div className={`popup popup_type_${name}`}>
//     {children}
//   </div>
// );

// export default PopupWithForm;
