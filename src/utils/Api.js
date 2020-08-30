/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable function-paren-newline */
/* eslint-disable no-underscore-dangle */
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    // console.log(this._baseUrl);
    this._headers = headers;
    // console.log(this._headers);
  }

  // GET https://around.nomoreparties.co/v1/groupId/cards
  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }

  // GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    // console.log(`${this._baseUrl}/users/me`);
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) =>
        // console.log('AAA', res);
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }

  getPageInfo() {
    return Promise.all([this.getCardList(), this.getUserInfo()]);
  }

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo({ name, about }) {
    // console.log(name, about);
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }

  getAppInfo() {
    // resolve all the above promises // not needed
  }

  // POST https://around.nomoreparties.co/v1/groupId/cards
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }

  // DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  removeCard(cardId) {
    // console.log(cardId);
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }

  // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  // DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  changeLikeCardStatus(cardID, like) {
    return (like
      ? fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
          headers: this._headers,
          method: 'PUT',
        })
      : fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
          headers: this._headers,
          method: 'DELETE',
        })
    )
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error${res.statusText}`)
      )

      .catch((err) => console.log(err));
  }
}

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-3',
  headers: {
    authorization: '9a4eb9c4-eb35-4130-9822-f1a4ffd479bc',
    'Content-Type': 'application/json',
  },
});

export default api;
