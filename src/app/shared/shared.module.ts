import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {HighchartsChartModule} from "highcharts-angular";
import { AreaComponent } from './widgets/area/area.component';
import { PieComponent } from './widgets/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AreaComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports:[
    HeaderComponent,
    AreaComponent,
    PieComponent


  ]
})
export class SharedModule { }
