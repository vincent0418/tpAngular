import {AbstractControl, ValidatorFn} from "@angular/forms";

export function nameContainsBurgerValidator(fix : string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any }  | null => {
    return control.value.toLowerCase().includes(fix) ? null : {'mustContain' : fix}
  }
}
