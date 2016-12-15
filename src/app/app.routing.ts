import { HomeComponent } from './home/home.component';
import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

 
export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "temp-unit-convertor", component: TempUnitConvertorComponent },
    { path: "bmi-calculator", component: BmiCalculatorComponent }
    

];
 
export const AppComponents: any = [
    HomeComponent,
    TempUnitConvertorComponent,
    BmiCalculatorComponent,
 
];