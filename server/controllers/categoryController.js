import ApiError from "../errors/ApiError.js";
import Category from "../models/category/category.js";


class CategoryController {

  async getAll(req, res, next) {
    try {
      const result = await Category.findAll();

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async create(req, res, next) {
    const { name } = req.body;

    try {
      const result = await Category.create({ 
        name 
      });

      return res.status(200).json(result);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }


  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const result = await Category.destroy({ 
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


export default new CategoryController();