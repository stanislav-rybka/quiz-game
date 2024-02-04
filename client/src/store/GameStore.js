import { makeAutoObservable } from "mobx";


export default class GameStore {

  _questions = [];
  _nextQuestion = {};


  constructor() {
    // Adding observation to class properties
    makeAutoObservable(this);
  }


  setQuestions(questions) {
    this._questions = questions;
  }

  setNextQuestion(question) {
    this._nextQuestion = question;
  }


  get questions() {
    return this._questions;
  }

  get nextQuestion() {
    return this._nextQuestion;
  }

}