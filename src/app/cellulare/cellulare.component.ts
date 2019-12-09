import { Component, OnInit, Input } from '@angular/core';
import { Cellulare } from './cellulare.model';

@Component({
  selector: 'app-cellulare',
  templateUrl: './cellulare.component.html',
  styleUrls: ['./cellulare.component.css']
})
export class CellulareComponent implements OnInit {

  @Input() cellulare: Cellulare;

  constructor() { }

  ngOnInit() {
  }

  setColore(): string {
    if (this.cellulare.annoUscita < 2019) {
      return 'red';
    } else {
      return 'green';
    }
  }

}