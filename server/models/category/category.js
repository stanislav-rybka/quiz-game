import sequelize from "../../db.js";
import { DataTypes } from "sequelize";
import Quiz from "../quiz/quiz.js";


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


// Establishing "One-to-Many" references between "Category" and "Quiz" models
Category.hasMany(Quiz);

Quiz.belongsTo(Category, {
  foreignKey: {
    allowNull: false
  }
});


export default Category;