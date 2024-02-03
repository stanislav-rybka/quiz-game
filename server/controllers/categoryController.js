class CategoryController {

  async create(req, res) {
    res.status(200).json({ message: 'Category creation' });
  }

}


export default new CategoryController();