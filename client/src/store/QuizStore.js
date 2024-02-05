import { makeAutoObservable } from "mobx";
import { shuffle } from "../utils/arrayUtils";


const sampleQuestions = [
  {
    text: 'What is a name of the football team shown in the image?',
    image: '400x200.png',
    correctAnswerId: '1',
    answerOptions: [
      { id: '1', text: 'Barcelona' },
      { id: '2', text: 'Real Madrid' },
      { id: '3', text: 'Arsenal' },
      { id: '4', text: 'Chelsea' },
    ],
  },

  {
    text: 'Which club did Alan Shearer win the Premier League title with?',
    image: '400x200.png',
    correctAnswerId: '6',
    answerOptions: [
      { id: '5', text: 'Watford' },
      { id: '6', text: 'Blackburn Rovers' },
      { id: '7', text: 'Manchester City' },
      { id: '8', text: 'Liverpool' },
    ],
  },

  {
    text: 'Who was the first goalkeeper to score in an FA Cup tie?',
    image: '400x200.png',
    correctAnswerId: '9',
    answerOptions: [
      { id: '9', text: 'Alan Cooling' },
      { id: '10', text: 'John Lewen' },
      { id: '11', text: 'Partu Sagba' },
      { id: '12', text: 'Lius Kraft' },
    ],
  },

  {
    text: 'How many times has England won the UEFA Women\'s Championship?',
    image: '400x200.png',
    correctAnswerId: '16',
    answerOptions: [
      { id: '13', text: '5' },
      { id: '14', text: '7' },
      { id: '15', text: '2' },
      { id: '16', text: '1' },
    ],
  },

  {
    text: 'Which company has sponsored the EFL Trophy since 2020?',
    image: '400x200.png',
    correctAnswerId: '17',
    answerOptions: [
      { id: '17', text: 'Papa Johns' },
      { id: '18', text: 'Coca-Cola' },
      { id: '19', text: 'McDonalds' },
      { id: '20', text: 'KFS' },
    ],
  },
];


export default class QuizStore {

  _defaultQuestionsCount = 20;

  _questions = [];
  _successQuestions = [];
  _failedQuestions = [];
  _currentQuestion = {};


  constructor() {
    // Adding observation to class properties
    makeAutoObservable(this);
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


  async initialize(category) {
    // TODO: change to API request
    const questions = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sampleQuestions);
      }, 1000);
    });

      
    this.setQuestions( [...shuffle(questions)] );
    this.setCurrentQuestion(0);
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