import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateToText',
  standalone: true
})
export class StateToTextPipe implements PipeTransform {

  transform(value: number | undefined): string {
    switch (value) {
      case 0:
          return "Baja";
          break;
      case 1:
          return "Activo";
          break;
      case 3:
        return "Por Efectivizar";
        break;
      default:
          return "Otro";
          break;
    }
  }

}
