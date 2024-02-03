import sequelize from "../../db.js";
import { DataTypes } from "sequelize";
import Question from "../question/question.js";


// Describing the "Answer" model
const Answer = sequelize.define('answer', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
  },

  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }

});


// Establishing "One-to-Many" references between "Answer" and "Question" models
Answer.hasMany(Question);

Question.belongsTo(Answer, {
  foreignKey: {
    allowNull: false
  }
});


export default Answer;