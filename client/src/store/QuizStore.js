import { makeAutoObservable } from "mobx";
import { shuffle } from "../utils/arrayUtils";
import { fetchQuizById } from "../http/quizAPI";


export default class QuizStore {

  _defaultQuestionsCount = 20;

  _name;
  _description;
  _questions = [];
  _successQuestions = [];
  _failedQuestions = [];
  _currentQuestion = {};


  constructor() {
    // Adding observation to class properties
    makeAutoObservable(this);
  }


  setName(name) {
    this._name = name;
  }

  setDescription(description) {
    this._description = description;
  }

  setQuestions(questions) {
    this._questions = questions;
  }

  setCurrentQuestion(index) {
    this._currentQuestion = {
      number: index + 1,
      details: this._questions[index]
    };
  }


  async initialize() {
    // TODO: change to API request
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });


    const response = await fetchQuizById(1);

    this.setName(response.data.name);
    this.setDescription(response.data.description);
    this.setQuestions( [...shuffle( this._convertQuestions(response.data.questions) )] );
    this.setCurrentQuestion(0);
  }

  _convertQuestions(questions) {
    return questions.map(question => ({
      ...question,
      correctAnswerId: question.answers.find(answer => answer.isCorrect === true)?.id
    }))
  }


  answerIsCorrect() {
    this.successQuestions.push(this.currentQuestion);
  }

  answerIsWrong() {
    this.failedQuestions.push(this.currentQuestion);
  }

  moveToNextQuestion() {
    if ( !this.currentQuestion ) {
      console.log(`Unknown current question`);
    }

    this.setCurrentQuestion(this.currentQuestion.number);
  }


  get defaultQuestionsCount() {
    return this._defaultQuestionsCount;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get questions() {
    return this._questions;
  }

  get successQuestions() {
    return this._successQuestions;
  }

  get failedQuestions() {
    return this._failedQuestions;
  }

  get currentQuestion() {
    return this._currentQuestion;
  }

}