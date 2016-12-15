import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {

  celcius : number = 0;
  fahrenheit : number = 0;
 counter : number = 0;
  constructor() { }

  CelToFahr() {
    this.fahrenheit = this.celcius * 9 / 5 + 32;
    this.counter++;
  }

  FahrToCel() {
    this.celcius = (this.fahrenheit - 32) * 5 / 9;
    this.counter++;
  }

  ngOnInit() {
  }

}
