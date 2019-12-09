import { Component, OnInit } from '@angular/core';
import { Cellulare } from '../cellulare/cellulare.model';

@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.component.html',
  styleUrls: ['./telefonia.component.css']
})
export class TelefoniaComponent implements OnInit {

  telefonia: Cellulare[];
  corrente: number;

  constructor() { }

  ngOnInit() {
    this.telefonia = [];
    this.telefonia.push(new Cellulare('Samsung', 'A70', 'Blu', 380, 2019));
    this.corrente = 0;
  }

  onNuovoClick() {
    this.telefonia.push(new Cellulare('', '', '', null, null));
    this.corrente = this.telefonia.length - 1;
  }

  onCellulareClick(index: number) {
    this.corrente = index;
  }

}