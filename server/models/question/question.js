import sequelize from "../../db.js";
import { DataTypes } from "sequelize";


// Describing the "Question" model
const Question = sequelize.define('question', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
  },

  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  image: {
    type: DataTypes.STRING,
  }

});


export default Question;