import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, timer } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ICurrency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private Base_URL = 'https://economia.awesomeapi.com.br';
  private cachedDataSubject = new BehaviorSubject<ICurrency | null>(null);
  public cachedData$: Observable<ICurrency | null> =
    this.cachedDataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.updateDataCache();

    timer(0, 180000)
      .pipe(switchMap(() => this.updateDataCache()))
      .subscribe();
  }

  private fetchData() {
    return this.http
      .get<ICurrency>(`${this.Base_URL}/last/CAD-BRL,ARS-BRL,GBP-BRL`)
      .pipe(catchError(this.handleError));
  }

  private updateDataCache() {
    return this.fetchData().pipe(
      switchMap((data) => {
        this.cachedDataSubject.next(data);
        return this.cachedDataSubject;
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocorreu um erro:', error);

    return throwError('Algo não saiu como esperado. Tente novamente.');
  }
}
