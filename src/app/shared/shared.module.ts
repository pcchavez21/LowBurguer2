import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {HighchartsChartModule} from "highcharts-angular";
import { AreaComponent } from './widgets/area/area.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports:[
    HeaderComponent,


  ]
})
export class SharedModule { }
