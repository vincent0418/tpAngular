import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'displayIngredients'
})
export class DisplayIngredient implements PipeTransform {
  transform(value: any, ...args): any {
    return "assets\\img\\" + value.ing + ".png";
  }


}
