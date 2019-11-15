import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerFormComponent } from './burger-form.component';

describe('BurgerFormComponent', () => {
  let component: BurgerFormComponent;
  let fixture: ComponentFixture<BurgerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
