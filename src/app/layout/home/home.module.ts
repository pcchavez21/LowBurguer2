import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
//import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        HomeRoutingModule,
        //ReactiveFormsModule,
        SharedModule,
        ReactiveFormsModule,
        CommonModule

    ]
})
export class HomeModule {
}
