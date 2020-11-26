import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  constructor(public http: HttpClient) {
  }
  WS_LOGIN(email, password){
    const em = email;
    const pass = password;
    return this.http.post(' https://low-low-burger.herokuapp.com/login', {email: em, password: pass});
  }
  WS_ORDENES(){
    return this.http.get('https://low-low-burger.herokuapp.com/orders',{});
  }
  WS_ORDENESFOLIO(f){
    const folio = f;
    return this.http.get('https://low-low-burger.herokuapp.com/orders/'+folio,{});
  }
  WS_CREARORDENES(orden){
    return this.http.post('https://low-low-burger.herokuapp.com/orders',orden);
  }
  WS_ACTUALIZARORDENES(f){
    return this.http.post('https://low-low-burger.herokuapp.com/ordersUpdate',{folio: f});
  }
  WS_USERS(){
    return this.http.get('https://low-low-burger.herokuapp.com/users',{});
  }
  WS_PRODUCTS(){
    return this.http.get('https://low-low-burger.herokuapp.com/products',{});
  }
  WS_GRAPH(fI,fF){
    return this.http.post('https://low-low-burger.herokuapp.com/graph', {day_min:fI,day_max:fF});
  }
  WS_DATATABLEIMAGE(){
    return this.http.post('http://localhost/wsPawy/wsPrueba/api_pawy_imagenProduct.php', {});
  }
}

