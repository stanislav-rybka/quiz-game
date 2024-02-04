import { makeAutoObservable } from "mobx";


export default class UserStore {

  _isAuthorized = false;
  _user = {};


  constructor() {
    this.user.nickname = 'Limmos';

    // Adding observation to class properties
    makeAutoObservable(this);  
  }


  setIsAuthorized(state) {
    this._isAuthorized = state;
  }

  setUser(user) {
    this._user = user;
  }


  get isAuthorized() {
    return this._isAuthorized;
  }

  get user() {
    return this._user;
  }

  get nickname() {
    return this._user.nickname;
  }

}