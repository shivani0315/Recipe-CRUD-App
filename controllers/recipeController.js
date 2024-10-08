// controllers/recipeController.js
const Recipe = require('../models/recipeModel');

// @desc    Create a new recipe
// @route   POST /api/recipes
// @access  Public
exports.createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, prepTime, cookTime, servings } = req.body;

    // Validation
    if (!title || !ingredients || !instructions || !prepTime || !cookTime || !servings) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      servings
    });

    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get all recipes
// @route   GET /api/recipes
// @access  Public
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get a recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update a recipe by ID
// @route   PUT /api/recipes/:id
// @access  Public
exports.updateRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, prepTime, cookTime, servings } = req.body;

    const updatedData = { title, ingredients, instructions, prepTime, cookTime, servings };

    const recipe = await Recipe.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true
    });

    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Delete a recipe by ID
// @route   DELETE /api/recipes/:id
// @access  Public
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

exports.createMultipleRecipe = async (req, res) => {
  try {
    const recipes = req.body;
    if (!recipes) return res.status(404).json({ message: 'Recipe not found' });
    await Recipe.insertMany(recipes);
    res.status(201).json(savedRecipe);
  }  catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};