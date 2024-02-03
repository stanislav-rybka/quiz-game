import ApiError from "../errors/ApiError.js";
import User from "../models/user/user.js";
import bcrypt from "bcrypt";


const saltRounds = 5;


class UserController {

  async login(req, res, next) {
    const { email, password } = req.body;

    if ( !email || !password ) {
      return next( ApiError.badRequest('Incorrect email or password') );
    }

    try {
      // Check if user with provided email already exists in DB
      const user = await User.findOne({
        where: { 
          email 
        } 
      });
  
      if ( !user ) {
        return next( ApiError.badRequest('User with such email does not exist') );
      }

      // Validating if provided password matches with the password in DB
      const passwordsMatch = bcrypt.compareSync(password, user.password);

      if (!passwordsMatch) {
        return next( ApiError.internal('Entered password is incorrect') );
      }

      return res.status(200).json({
        id: user.id,
        email
      });
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }
  
  
  async register(req, res, next) {
    const { email, password } = req.body;

    // Check if provided email/password values exist
    if ( !email || !password ) {
      return next( ApiError.badRequest('Incorrect email or password') );
    }

    try {
      // Check if user with provided email already exists in DB
      const user = await User.findOne({
        where: { 
          email 
        } 
      });
  
      if (user) {
        return next( ApiError.badRequest('User with such email already exists') );
      }

      // Generating secure hash password
      const hashPassword = await bcrypt.hash(password, saltRounds);

      // Creationg of user
      const result = await User.create({ email, password: hashPassword });

      return res.status(200).json({
        id: result.id,
        email: result.email
      });
    } catch (err) {
      return next( ApiError.badRequest(err.message) );
    }
  }

}


export default new UserController();