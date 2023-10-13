import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPanelComponent } from './currency-panel.component';
import { CardCurrencyComponent } from './components/card-currency/card-currency.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CurrencyPanelComponent, CardCurrencyComponent],
  exports: [CurrencyPanelComponent],
})
export class CurrencyPanelModule {}
