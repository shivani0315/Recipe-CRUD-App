const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController'); // Your controller

// GET all recipes
router.get('/', recipeController.getAllRecipes);

// POST a new recipe
router.post('/', recipeController.createRecipe);

// GET a single recipe by ID
router.get('/:id', recipeController.getRecipeById);

// PUT (update) a recipe by ID
router.put('/:id', recipeController.updateRecipe);

// DELETE a recipe by ID
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;

