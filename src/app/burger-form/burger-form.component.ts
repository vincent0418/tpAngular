import {Component, OnInit} from '@angular/core';
import {nameContainsBurgerValidator} from "./name.validator";
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Burger} from "../burger";

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
    this.burger = new Burger();
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
  }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    console.log(f.value);
  }
  onSubmitForm(f: NgForm) {
    if (f.valid){
      let burger = this.burger;
      burger.name = f.value.name;
      f.value.ingredients.forEach(function(ingredient){
        burger.ingredients.push(ingredient);
      });
      burger.creationDate = new Date();
    }
  }


}
