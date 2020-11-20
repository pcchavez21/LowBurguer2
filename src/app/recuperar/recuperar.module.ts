import {NgModule} from '@angular/core';
import {RecuperarRoutingModule} from './recuperar-routing.module';
import {RecuperarComponent} from "./recuperar.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RecuperarComponent
  ],
  imports: [
    RecuperarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class RecuperarModule {
}
