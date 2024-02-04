import { makeAutoObservable } from "mobx";


export default class UserStore {

  _isAuthorized = false;
  _user = {};


  constructor() {
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

}