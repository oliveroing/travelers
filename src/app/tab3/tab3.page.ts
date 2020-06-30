import { Component, OnInit } from '@angular/core';
import { SYMBOLS } from '../constants/constantes';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  monedas;
  constructor() { }

  ngOnInit() {
    this.monedas = SYMBOLS.sort((a, b) => {
      if (a.simbolo > b.simbolo) { return 1; }
      if (b.simbolo > a.simbolo) { return -1; }
      return 0;
    });
  }

}
