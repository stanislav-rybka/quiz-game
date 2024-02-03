import ApiError from "../errors/ApiError.js";
import Category from "../models/category/category.js";


class CategoryController {

  async create(req, res) {
    res.status(200).json({ message: 'Category creation' });
  }

}


export default new CategoryController();