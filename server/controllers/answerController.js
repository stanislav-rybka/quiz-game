import ApiError from "../errors/ApiError.js";
import Answer from "../models/answer/answer.js";


class AnswerController {

  async getAll(req, res, next) {
    try {
      const result = await Answer.findAll();

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async create(req, res, next) {
    const { text, categoryId } = req.body;

    try {
      const result = await Answer.create({ 
        text, 
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
      const result = await Answer.destroy({ 
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


export default new AnswerController();