import sequelize from "../../db.js";
import { DataTypes } from "sequelize";


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


export default Answer;