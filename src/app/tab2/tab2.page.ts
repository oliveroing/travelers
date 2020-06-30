import { Component, OnInit } from '@angular/core';
import { SYMBOLS } from '../constants/constantes';
import { ExchangeService } from '../services/exchange.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  monedas;
  monedaOrigen;
  constructor(public loading: LoadingService, private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.monedas = SYMBOLS;
  }

  convertir() {
    this.loading.present();
    this.exchangeService.getRates(this.monedaOrigen)
      .then(body => {
        this.monedas.forEach(moneda => {
          moneda.rate = body.conversion_rates[moneda.simbolo];
        });
        this.loading.dismiss();
      });
  }
}
