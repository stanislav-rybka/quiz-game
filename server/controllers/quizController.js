import ApiError from "../errors/ApiError.js";
import Quiz from "../models/quiz/quiz.js";


class QuizController {

  async getAll(req, res, next) {
    try {
      const result = await Quiz.findAll();

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async create(req, res, next) {
    const { name, description, categoryId } = req.body;

    try {
      const result = await Quiz.create({ 
        name,
        description,
        categoryId
      });

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const result = await Quiz.destroy({ 
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


export default new QuizController();