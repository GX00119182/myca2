import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor() { }

  stone : number = 0;
  pounds : number = 0;
  kilos : number = 0;

  feet : number = 0;
  inches : number = 0;
  meters : number = 0;
  value : number = 0;
  bmi : number = 0;
  bmiString : string;
  counter : number = 0;

KiloToPound(){
  this.value = this.kilos / 0.453592;
  this.pounds = this.value %14;
  this.stone = (this.value - this.pounds) / 14;
  this.pounds = Math.round(this.pounds);
}

PoundToKilo(){
  
  this.value = (this.pounds + (this.stone * 14));
  this.kilos = this.value * 0.453592;
  this.kilos = this.kilos / 10;
}

FeetAndInchesToMetre(){
  this.value = 0;
  this.value = this.inches + (this.feet *12);
  this.meters = this.value * 0.0254;
  this.meters = Math.round(this.meters * 100) / 100;
}
MetreToInchesAndFeet(){
this.value = 0;
this.value = this.meters / 0.0254;
this.inches = this.value %12;
this.feet = (this.value - this.inches) /12;
this.inches = Math.round(this.inches);
}
BMI(){
  this.bmi = (this.kilos / (this.meters * this.meters));
  this.bmi = Math.round(this.bmi);
 
 if(this.bmi < 18.5 ){
   this.bmiString = "You are underweight";
 }
 else if(this.bmi >= 18.5 && this.bmi < 25){
    this.bmiString = "You are of normal weight";
 }
 else if(this.bmi >= 25 && this.bmi < 30){
    this.bmiString = "You are overweight";
 }
  else if( this.bmi >= 30){
    this.bmiString = "You are heavily overweight";
 }

}











  ngOnInit() {
  }

}
