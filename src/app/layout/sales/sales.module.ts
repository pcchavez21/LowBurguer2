import {NgModule} from '@angular/core';
import {SalesRoutingModule} from './sales-routing.module';
import {SalesComponent} from './sales.component';
//import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    SalesRoutingModule,
    //ReactiveFormsModule,
    SharedModule,
    DataTablesModule

  ]
})
export class SalesModule {
}
