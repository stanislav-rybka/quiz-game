import sequelize from "../../db.js";
import { DataTypes } from "sequelize";
import Question from "../question/question.js";


// Describing the "Quiz" model
const Quiz = sequelize.define('quiz', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
  }

});


// Establishing "One-to-Many" references between "Quiz" and "Question" models
Quiz.hasMany(Question);

Question.belongsTo(Quiz, {
  foreignKey: {
    allowNull: false
  }
});


export default Quiz;