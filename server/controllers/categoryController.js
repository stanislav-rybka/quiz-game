import ApiError from "../errors/ApiError.js";
import Category from "../models/category/category.js";


class CategoryController {

  async create(req, res, next) {
    const { name } = req.body;

    try {
      const createdCategory = await Category.create({ name });

      return res.status(200).json(createdCategory);
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }

}


export default new CategoryController();