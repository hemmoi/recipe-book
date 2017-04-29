import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('A test recipe','This is simply a test', 'https://c1.staticflickr.com/3/2785/4106965666_79f19f168c.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
