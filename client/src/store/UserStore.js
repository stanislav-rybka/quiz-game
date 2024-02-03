import { makeAutoObservable } from "mobx";


export default class UserStore {

  #isAuthorized = false;
  #user = {};


  constructor() {
    // Adding observation to class properties
    makeAutoObservable(this);  
  }


  setIsAuthorized(state) {
    this.#isAuthorized = state;
  }

  setUser(user) {
    this.#user = user;
  }


  get isAuthorized() {
    return this.#isAuthorized;
  }

  get user() {
    return this.#user;
  }

}