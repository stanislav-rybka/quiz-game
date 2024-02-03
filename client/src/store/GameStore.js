import { makeAutoObservable } from "mobx";


export default class GameStore {

  #questions = [];
  #nextQuestion = {};


  constructor() {
    // Adding observation to class properties
    makeAutoObservable(this);
  }


  setQuestions(questions) {
    this.#questions = questions;
  }

  setNextQuestion(question) {
    this.#questions = question;
  }


  get questions() {
    return this.#questions;
  }

  get nextQuestion() {
    return this.#nextQuestion;
  }

}