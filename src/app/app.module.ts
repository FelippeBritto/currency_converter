import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyPanelModule } from './currency-panel/currency-panel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CurrencyPanelModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
