import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-currency',
  templateUrl: './card-currency.component.html',
  styleUrls: ['./card-currency.component.scss'],
})
export class CardCurrencyComponent implements OnInit {
  @Input() currencyName: string;
  @Input() currencyValue: string;
  @Input() valueVariation: string;
  @Input() lastUpdate: string;
  @Input() isLoading: boolean;
  @Input() errorOccurred: boolean = false;

  @Output() onRetry: EventEmitter<void> = new EventEmitter<void>();

  errorMessage: string = 'Algo deu errado';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    //comentar essa linha para parar os erros
    this.simulateError();
  }

  sanitizePath(path: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  }

  setTextColor(value: string): string {
    const numericValue = parseFloat(value);

    switch (true) {
      case numericValue < 1:
        return 'red-text';

      case numericValue > 1 && numericValue <= 5:
        return 'green-text';

      case numericValue > 5:
        return 'blue-text';

      default:
        return '';
    }
  }

  handleOnRetry() {
    this.errorOccurred = false;
    this.onRetry.emit();
  }

  simulateError() {
    this.errorOccurred = true;
  }
}
