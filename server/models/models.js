import sequelize from "../db.js";
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


// Establishing "One-to-Many" references between "Answer" and "Question" models
Answer.hasMany(Question);

Question.belongsTo(Answer, {
  foreignKey: {
    allowNull: false
  }
});


export default {
  User,
  Question,
  Answer,
  Category
};