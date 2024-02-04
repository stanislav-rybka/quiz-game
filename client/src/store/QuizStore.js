import { makeAutoObservable } from "mobx";


export default class QuizStore {

  _questions = [];
  _currentQuestion = {};
  _nextQuestion = {};


  constructor() {
    this.setCurrentQuestion({
      text: 'What is a name of the football team shown in the image?',
      image: '400x200.png',
      answerId: '6',
      possibleAnswers: ['Barcelona', 'Real Madrid', 'Chelsi', 'Dinamo']
    });

    // Adding observation to class properties
    makeAutoObservable(this);
  }


  setQuestions(questions) {
    this._questions = questions;
  }

  setCurrentQuestion(question) {
    this._currentQuestion = question;
  }

  setNextQuestion(question) {
    this._nextQuestion = question;
  }


  get questions() {
    return this._questions;
  }

  get currentQuestion() {
    return this._currentQuestion;
  }

  get nextQuestion() {
    return this._nextQuestion;
  }

}