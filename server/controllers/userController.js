class UserController {

  async login(req, res) {
    res.status(200).json({ message: 'User login' });
  }
  
  async register(req, res) {
    res.status(200).json({ message: 'User registration' });
  }

}


export default new UserController();