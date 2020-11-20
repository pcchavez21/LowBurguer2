import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WsService {
  constructor(public http: HttpClient) {
  }
  WS_LOGIN(data){
    return this.http.post('http://localhost/wsPawy/wsPrueba/api_pawy_login.php',data);
  }
  WS_ORDENES(){
    return this.http.post('http://localhost/wsPawy/wsPrueba/pruebas.php',{});
  }
  WS_USERS(){
    return this.http.get('http://192.168.100.11:5000/users',{});
  }
  WS_DATATABLE(){
    return this.http.post('http://localhost/wsPawy/wsPrueba/api_pawy_productos.php', {});
  }
  WS_DATATABLEIMAGE(){
    return this.http.post('http://localhost/wsPawy/wsPrueba/api_pawy_imagenProduct.php', {});
  }
}

