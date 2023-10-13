import { ICurrency } from './interfaces/currency';
import { Subject, takeUntil } from 'rxjs';
import { CurrenciesService } from './services/currencies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-panel',
  templateUrl: './currency-panel.component.html',
  styleUrls: ['./currency-panel.component.scss'],
})
export class CurrencyPanelComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  cachedCurrencies: ICurrency[] | null;

  constructor(private service: CurrenciesService) {}

  ngOnInit(): void {
    this.service.cachedData$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        if (data) {
          return (this.cachedCurrencies = Object.values(data));
        }
        return (this.cachedCurrencies = null);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
