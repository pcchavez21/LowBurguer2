import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './orders.component';
//import {ReactiveFormsModule} from "@angular/forms";
//import {SharedModule} from "../../shared/shared.module";
//import {DataTablesModule} from "angular-datatables";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    OrdersRoutingModule,
    //ReactiveFormsModule,
    //SharedModule,
    //DataTablesModule,
    CommonModule

  ]
})
export class OrdersModule {
}
