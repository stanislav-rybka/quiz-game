import sequelize from "../../db.js";
import { DataTypes } from "sequelize";


// Describing the "User" model
const User = sequelize.define('user', {
  
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
  },

});


export default User;