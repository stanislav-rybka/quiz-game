import ApiError from "../errors/ApiError.js";
import Answer from "../models/answer/answer.js";
import Question from "../models/question/question.js";
import Quiz from "../models/quiz/quiz.js";
import { isNumeric } from "../utils/textUtils.js";


class QuizController {

  async getAll(req, res, next) {
    const { categoryId } = req.query;

    try {
      // Check if provided category ID is a numeric value
      if ( categoryId && !isNumeric(categoryId) ) {
        throw ApiError.badRequest('"categoryId" has to be a numeric value.');
      }

      let result = [];

      if (categoryId) {
        result = await Quiz.findAll({
          where: {
            categoryId: +categoryId
          }
        });
      } else {
        result = await Quiz.findAll();
      }

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async getOne(req, res, next) {
    const { id } = req.params;

    try {
      const result = await Quiz.findOne({
        where: {
          id
        },
        include: [
          {
            model: Question,
            as: 'questions',
            include: [
              {
                model: Answer,
                as: 'answers'
              }
            ]
          }
        ]
      });

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