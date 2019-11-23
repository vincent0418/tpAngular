import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {nameContainsBurgerValidator} from "./name.validator";

@Component({
  selector: 'app-burger-form',
  templateUrl: './burger-form.component.html',
  styleUrls: ['./burger-form.component.css']
})
export class BurgerFormComponent implements OnInit {
  model: FormGroup;

  ingredientList: string[] = [
    'Cornichon',
    'Fromage',
    'Oignon',
    'Pain',
    'Salade',
    'Steak',
    'Tomate'
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.model = this.formBuilder.group({
      name: ['', [
        nameContainsBurgerValidator("burger")
      ]],
      ingredients: this.formBuilder.array([])
    });
  }

  get name() {
    return this.model.get('name');
  }

  get ingredientsForm() {
    return this.model.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredient = this.formBuilder.group({
      ing: []
    });
    this.ingredientsForm.push(ingredient);
  }

}
