import ApiError from "../errors/ApiError.js";
import Question from "../models/question/question.js";


class QuestionController {

  async create(req, res) {
    res.status(200).json({ message: 'Question creation' });
  }

  async getAll(req, res) {
    res.status(200).json([{ message: 'All questions fetching' }]);
  }

}


export default new QuestionController();