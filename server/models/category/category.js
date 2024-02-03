import sequelize from "../../db.js";
import { DataTypes } from "sequelize";


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


export default Category;