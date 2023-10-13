import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrencyValue',
})
export class CurrencyValuePipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    return value.toFixed(2).replace('.', ',');
  }
}
