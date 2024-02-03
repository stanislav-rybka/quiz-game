import ApiError from "../errors/ApiError.js";
import Question from "../models/question/question.js";
import { v4 as uuidv4 } from 'uuid';
import path from "path";


const __dirname = import.meta.dirname;


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
    let image;

    if (req.files) {
      image = req.files.image;
    }
    

    try {
      let fileName;

      if (image) {
        // Generating unique file name
        fileName = `${ uuidv4() }.jpg`;

        // Moving uploaded file to he "static" folder
        image.mv( path.resolve(__dirname, '..', 'static', fileName) );
      }

      // Creation of question in DB
      const result = await Question.create({ 
        text, 
        image : fileName || '', 
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