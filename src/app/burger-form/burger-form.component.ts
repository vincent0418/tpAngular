import {Component, OnInit} from '@angular/core';
import {nameContainsBurgerValidator} from "./name.validator";
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

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
      ingredients: this.formBuilder.array([], [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get name() {
    return this.model.get('name');
  }

  get ingredients() {
    return this.model.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredient = this.formBuilder.group({
      ing: []
    });
    this.ingredients.push(ingredient);
    console.log(this.ingredients.status);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
