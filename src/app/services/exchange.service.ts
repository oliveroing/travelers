import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate, RateRQ } from '../interfaces/rate';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private apiKey = '18381a63013780948ba02f4e';
  private baseUrl = `https://prime.exchangerate-api.com/v5/${this.apiKey}`;
  constructor(private http: HttpClient) { }

  getAllRates(): Promise<Rate> {
    return this.http.get<Rate>(this.baseUrl).toPromise();
  }

  getRates(MonedaOrigen: string): Promise<any> {
    // const url = `${this.baseUrl}/pair/${MonedaOrigen}/${monedaDestino}`;
    const url = `${this.baseUrl}/latest/${MonedaOrigen}`;
    return this.http.get<any>(url).toPromise();
  }
}
