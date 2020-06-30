import { Component, OnInit } from '@angular/core';
import { SYMBOLS } from '../constants/constantes';
import { ExchangeService } from '../services/exchange.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  monedas: any[];
  valorACotizar;
  monedaOrigen;
  monedaDestino1;
  monedaDestino2;
  cotizacion1;
  cotizacion2;
  // flagOrigen = this.getFlag(this.monedaOrigen);

  constructor(public loading: LoadingService, private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.monedas = SYMBOLS;
    this.monedaOrigen = this.monedas[0].simbolo;
    this.monedaDestino1 = this.monedas[1].simbolo;
    this.monedaDestino2 = this.monedas[2].simbolo;
  }

  convertir() {
    this.loading.present();
    this.exchangeService.getRates(this.monedaOrigen)
      .then(body => {
        if (this.monedaDestino1) { (this.cotizacion1 = this.redondeo(this.valorACotizar * body.conversion_rates[this.monedaDestino1])); }
        if (this.monedaDestino2) { (this.cotizacion2 = this.redondeo(this.valorACotizar * body.conversion_rates[this.monedaDestino2])); }
        this.loading.dismiss();
      });
  }

  redondeo(num) {
    return Number(num.toFixed(2));
  }

  // getFlag(monedaOrigen) {
  //   this.monedas.forEach(m => {
  //     if (m.simbolo === monedaOrigen) {
  //       return m.flag;
  //     }
  //   });
  // }




}
