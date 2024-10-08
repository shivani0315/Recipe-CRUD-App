// models/Recipe.js
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: [
    {
      type: String,
      required: true
    }
  ],
  instructions: {
    type: String,
    required: true
  },
  prepTime: {
    type: Number, // in minutes
    required: true
  },
  cookTime: {
    type: Number, // in minutes
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('recipeModels', RecipeSchema);
