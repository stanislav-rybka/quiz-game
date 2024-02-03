import ApiError from "../errors/ApiError.js";
import Answer from "../models/answer/answer.js";


class AnswerController {

  async create(req, res) {
    res.status(200).json({ message: 'Answer creation' });
  }

  async getAll(req, res) {
    res.status(200).json([{ message: 'All answers fetching' }]);
  }

}


export default new AnswerController();