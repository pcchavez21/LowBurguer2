import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import {LayoutComponent} from "./layout.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
