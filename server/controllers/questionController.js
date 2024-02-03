import ApiError from "../errors/ApiError.js";
import Question from "../models/question/question.js";


class QuestionController {

  async getAll(req, res, next) {
    try {
      const result = Question.findAll();

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async create(req, res, next) {
    const { text, categoryId, answerId } = req.body;
    const { image } = req.files;

    console.log(image);

    try {
      const result = await Question.create({ 
        text, 
        image, 
        categoryId, 
        answerId
      });

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const result = Question.destroy({
        where: { 
          id 
        } 
      });

      return res.status(201).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }

}


export default new QuestionController();