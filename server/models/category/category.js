import sequelize from "../../db.js";
import { DataTypes } from "sequelize";
import Answer from "../answer/answer.js";
import Question from "../question/question.js";


// Describing the "Category" model
const Category = sequelize.define('category', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }

});


// Establishing "One-to-Many" references between "Category" and "Answer" models
Category.hasMany(Answer);

Answer.belongsTo(Category, {
  foreignKey: {
    allowNull: false
  }
});


// Establishing "One-to-Many" references between "Category" and "Question" models
Category.hasMany(Question);

Question.belongsTo(Category, {
  foreignKey: {
    allowNull: false
  }
});


export default Category;