import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Super tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Figlm%C3%BCller-Schnitzel_in_Wien.jpg' ,
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'Fatter than your mothers ass!',
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Umami_Burger_hamburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
