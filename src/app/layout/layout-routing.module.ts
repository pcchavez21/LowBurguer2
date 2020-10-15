import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent} from "./layout.component";
//import {AuthRbac} from "../shared/rbca";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path:'', redirectTo: 'home', pathMatch:'prefix'},
      {
        path: 'home', loadChildren:() => import('./home/home.module').then(
          (m)=> m.HomeModule)
      },
      {
        path: 'orders', loadChildren:() => import('./orders/orders.module').then(
          (m)=> m.OrdersModule)
      },
      {
        path: 'sales', loadChildren:() => import('./sales/sales.module').then(
          (m)=> m.SalesModule),
        //canActivate: [AuthRbac]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
