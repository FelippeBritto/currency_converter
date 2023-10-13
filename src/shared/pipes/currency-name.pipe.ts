import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyName',
})
export class CurrencyNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes('/Real Brasileiro')) {
      return value.replace('/Real Brasileiro', '');
    } else {
      return value;
    }
  }
}
