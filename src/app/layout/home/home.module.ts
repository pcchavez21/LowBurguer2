import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
//import {ReactiveFormsModule} from "@angular/forms";
//import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule
    //ReactiveFormsModule,
    //SharedModule

  ]
})
export class HomeModule {
}
