import { Component } from '@angular/core';
import { Citta } from './citta/citta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  citta:Citta[]
  constructor(){
  this.citta = [
    {
        "luogo": "Milano",
        "latitudine": 45.4654219,
        "longitudine": 9.1859243,
        "altitudine": 120, 
        "clima": "temperato umido"
    },
    {
        "luogo": "Roma",
        "latitudine": 41.9027835,
        "longitudine": 12.4963655,
        "altitudine": 21, 
        "clima": "mediterraneo"
    },
    {
        "luogo": "Aosta",
        "latitudine": 45.734955,
        "longitudine": 7.313076,
        "altitudine": 583, 
        "clima": "alpino"
    },
    {
        "luogo": "Palermo",
        "latitudine": 38.1156879,
        "longitudine": 13.3612671,
        "altitudine": 14, 
        "clima": "mediterraneo"
    }]
  }
  stampArray() {
    this.citta.sort((a, b) => b.altitudine - a.altitudine);
  }
  stampArray2() {
    this.citta.sort((a, b) => b.longitudine - a.longitudine);
  }

  
   
     


}
