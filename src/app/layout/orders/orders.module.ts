import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './orders.component';
//import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    OrdersComponent
  ],
    imports: [
        OrdersRoutingModule,
        //ReactiveFormsModule,
        SharedModule,
        CommonModule,
        DataTablesModule

    ]
})
export class OrdersModule {
}
