import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import { WsService} from '../../services';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //public formProducto: FormGroup;

  modalArray = {
    id:'',nombre:'',descripcion:'',imagen:'',precio:''
  };
  extrasArray = {
    amount:'', instructions:'', id_product:'', toppings:[]
  };
  instruccionesVar= '';
  amountVar= 1;
  quesoVar : any;
  cebollaVar : any;
  noExtras: any;
  suma = 0;
  lista2: any;
  list = [];
  date: any;
  time: any;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder,private ws: WsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  open(content) {
    this.modalService.open(content,{size: 'lg',centered: true});
  }
  getProducts(){
    this.ws.WS_PRODUCTS().subscribe(data=>{
      console.log(data);
      this.lista2 = data["result"];
    })
  }

  addList(product){
    this.list.push({
      imagen:product.imagen,
      extra: product.nombre,
      cantidad: this.amountVar,
      precio: product.precio
    });
    this.extrasArray.toppings = [];
      this.extrasArray['amount'] = this.amountVar.toString();
      let T = this.amountVar * parseInt(this.modalArray.precio);
      this.suma = this.suma + T;
      this.amountVar = 0;
      this.extrasArray['instructions'] = this.instruccionesVar;
      this.instruccionesVar = '';
      this.extrasArray['id_product'] = this.modalArray.id;
      if (this.noExtras){
        let E = 3;
        this.extrasArray.toppings.push(E);
      }else if (this.cebollaVar && this.quesoVar){
        let Q =2;
        let C =1;
        this.extrasArray.toppings.push(C,Q);
      } else if (this.cebollaVar == false && this.quesoVar){
        let Q =2;
        this.extrasArray.toppings.push(Q);
      } else if (this.cebollaVar && this.quesoVar == false){
        let C=1;
        this.extrasArray.toppings.push(C);
      }else{
        let E =3;
        this.extrasArray.toppings.push(E);
      }

    console.log(this.noExtras);
    console.log(this.extrasArray);
    console.log(this.lista2);
    console.log(this.date);
    console.log(this.time);
    console.log(this.suma);
  }
  removeList(item,i){
  this.list.splice(i,1);
  let R = parseInt(item.precio) * item.cantidad
  this.suma = this.suma - R;
  }
  burguerModal(item){
    this.modalArray.id = item.id;
    this.modalArray.nombre = item.name;
    this.modalArray.descripcion = item.description;
    this.modalArray.imagen = item.image;
    this.modalArray.precio = item.price;
    console.log(this.modalArray);
  }



}
