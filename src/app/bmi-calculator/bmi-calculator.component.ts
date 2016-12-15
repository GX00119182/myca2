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

  bmi : number = 0;
  counter : number = 0;

  poundToKilo : number = 0; 
  stoneToKilo : number = 0; 
  poundToStone : number = 0; 
  kiloToStone : number = 0; 
  stoneToPound : number = 0; 
  kiloToPound : number = 0; 

  feetToMetre : number = 0; 
  inchToMetre : number = 0; 
  feetToInch : number = 0; 
  meterToInch : number = 0; 
  inchToFeet : number = 0; 
  metreToFeet : number = 0; 
  
  BMI() {
    
     this.poundToKilo = this.pounds * (1 /2.2);
     this.stoneToKilo = this.stone / 6.35029318;
     this.poundToStone = this.pounds * 0.071429;
     this.kiloToStone = this.kilos * 0.15747;
     this.stoneToPound = this.stone * 14;
     this.kiloToPound = this.kilos * 2.2046;

    
     this.feetToMetre = this.feet / 3.28;
     this.inchToMetre = this.inches * 0.0254;
     this.feetToInch = this.feet * 12; 
     this.meterToInch = this.meters * 39.370; 
     this.inchToFeet = this.feet/12; 
     this.metreToFeet = this.meters * 3.2808;
     
     if(this.pounds > this.stone && this.pounds > this.kilos){
          this.kilos = this.poundToKilo;
          this.stone = this.poundToStone;
        if(this.feet > this.meters && this.feet > this.inches){
          this.meters = this.feetToMetre;
          this.inches = this.feetToInch;

          this.bmi = this.kilos/(this.meters * this.meters);
        }
        else if(this.inches > this.meters && this.inches > this.feet){
          this.meters = this.inchToMetre;
          this.feet = this.inchToFeet;

          this.bmi = this.kilos/(this.meters * this.meters);
        }
        else if(this.meters > this.inches && this.meters > this.feet){
          this.feet = this.metreToFeet;
          this.inches = this.meterToInch;
          
          this.bmi = this.kilos/(this.meters * this.meters);
        }

     }
     else if(this.stone > this.pounds && this.stone > this.kilos){
       this.kilos = this.stoneToKilo;
       this.pounds = this.stoneToPound;
         if(this.feet > this.meters && this.feet > this.inches){
             this.meters = this.feetToMetre;
          this.inches = this.feetToInch;

            this.bmi = this.kilos/(this.meters * this.meters);
        }
        else if(this.inches > this.meters && this.inches > this.feet){
             this.meters = this.inchToMetre;
             this.feet = this.inchToFeet;

            this.bmi = this.kilos/(this.meters * this.meters);
        }
        else if(this.meters > this.inches && this.meters > this.feet){
            this.feet = this.metreToFeet;
            this.inches = this.meterToInch;

            this.bmi = this.kilos/(this.meters * this.meters);
        }
     }
     else if(this.kilos > this.pounds && this.kilos > this.stone){
       this.pounds = this.kiloToPound;
       this.stone = this.kiloToStone;
         if(this.feet > this.meters && this.feet > this.inches){
           this.meters = this.feetToMetre;
           this.inches = this.feetToInch;

           this.bmi = this.kilos/(this.meters * this.meters);
        }
        else if(this.inches > this.meters && this.inches > this.feet){
             this.meters = this.inchToMetre;
             this.feet = this.inchToFeet;

            this.bmi = this.kilos/(this.meters * this.meters);
        }
        else if(this.meters > this.inches && this.meters > this.feet){
             this.feet = this.metreToFeet;
             this.inches = this.meterToInch;

            this.bmi = this.kilos/(this.meters * this.meters); //finalBMICalc
        }
     }
     
     this.counter++;
  }

  ngOnInit() {
  }

}
