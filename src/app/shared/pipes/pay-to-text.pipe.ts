import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'payToText',
  standalone: true
})
export class PayToTextPipe implements PipeTransform {
  transform(value: number | undefined): string {
    switch (value) {
      case 0:
          return "No Pagado";
          break;
      case 1:
          return "Pagado";
          break;
      default:
          return "Otro";
          break;
    }
  }

}
