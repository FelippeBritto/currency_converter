import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyNamePipe } from './pipes/currency-name.pipe';
import { CurrencyValuePipe } from './pipes/currency-value.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrencyNamePipe, CurrencyValuePipe],
  exports: [CurrencyNamePipe, CurrencyValuePipe],
})
export class SharedModule {}
