import { SharedModule } from './../shared/shared.module';
import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './../shared/dropdown.directive';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeBookComponent } from './recipe-book.component';


@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeBookRoutingModule,
        SharedModule
    ]
})

export class RecipeBookModule {}