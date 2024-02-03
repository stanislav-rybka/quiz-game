import User from "./user/user.js";
import Question from "./question/question.js";
import Category from "./category/category.js";
import Answer from "./answer/answer.js";


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