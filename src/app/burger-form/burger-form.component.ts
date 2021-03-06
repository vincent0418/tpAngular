import {Component, OnInit} from '@angular/core';
import {nameContainsBurgerValidator} from './name.validator';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Burger} from '../burger';

@Component({
  selector: 'app-burger-form',
  templateUrl: './burger-form.component.html',
  styleUrls: ['./burger-form.component.css']
})
export class BurgerFormComponent implements OnInit {
  model: FormGroup;
  burger: Burger;

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
        nameContainsBurgerValidator('burger')
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
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  onSubmitForm() {
    const formValue = this.model.value;
    this.burger = new Burger(
      formValue.name,
      formValue.ingredients,
      new Date()
    );
  }
}
