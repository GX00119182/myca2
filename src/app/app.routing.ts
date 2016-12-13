import { AppComponent } from './app.component';//home
import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
 import { HomeComponent } from './home/home.component';
 
export const AppRoutes: any = [
    { path: "", component: AppComponent },
    { path: "temp-unit-convertor", component: TempUnitConvertorComponent },
    { path: "bmi-calculator", component: BmiCalculatorComponent },
    { path: "home", component: HomeComponent }

];
 
export const AppComponents: any = [
    AppComponent,
    TempUnitConvertorComponent,
    BmiCalculatorComponent,
    HomeComponent
];