import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-burger-form',
  templateUrl: './burger-form.component.html',
  styleUrls: ['./burger-form.component.css']
})
export class BurgerFormComponent implements OnInit {
  model: FormGroup;

  ingredients: string[] = [
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
      name: '',
      ingredients: this.formBuilder.array([])
    });
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
