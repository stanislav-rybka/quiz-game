import sequelize from "../../db.js";
import { DataTypes } from "sequelize";
import Answer from "../answer/answer.js";


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


// Establishing "One-to-Many" references between "Question" and "Answer" models
Question.hasMany(Answer);

Answer.belongsTo(Question, {
  foreignKey: {
    allowNull: false
  }
});


export default Question;