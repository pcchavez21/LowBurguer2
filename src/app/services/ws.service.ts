import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WsService {
  constructor(public http: HttpClient) {
  }
  WS_LOGIN(data){
    return this.http.post(' https://low-low-burger.herokuapp.com/login',data);
  }
  WS_ORDENES(){
    return this.http.get('https://low-low-burger.herokuapp.com/orders',{});
  }
  WS_USERS(){
    return this.http.get('https://low-low-burger.herokuapp.com/users',{});
  }
  WS_PRODUCTS(){
    return this.http.get('https://low-low-burger.herokuapp.com/products',{});
  }
  WS_DATATABLE(){
    return this.http.post('http://localhost/wsPawy/wsPrueba/api_pawy_productos.php', {});
  }
  WS_DATATABLEIMAGE(){
    return this.http.post('http://localhost/wsPawy/wsPrueba/api_pawy_imagenProduct.php', {});
  }
}

