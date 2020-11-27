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
  products =[];
  instruccionesVar= '';
  amountVar= 1;
  tocinoVar: any;
  pinaVar:any;
  jalapenoVar:any;
  salchichaVar:any;
  quesoVar : any;
  cebollaVar : any;
  noExtras: any;
  suma = 0;
  lista2: any;
  list = [];
  date: any;
  time: any;
  direccion:any;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder,private ws: WsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  open(content) {
    this.modalService.open(content,{size: 'lg',centered: true});
  }
  openM(content) {
    this.modalService.open(content,{size:"lg",centered: true});
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
      this.extrasArray['amount'] = this.amountVar.toString();
      let T = this.amountVar * parseInt(this.modalArray.precio);
      this.suma = this.suma + T;
      this.amountVar = 1;
      if (this.instruccionesVar == ''){
        this.instruccionesVar = 'Sin comentarios';
      }
      this.extrasArray['instructions'] = this.instruccionesVar;
      this.instruccionesVar = '';
      this.extrasArray['id_product'] = this.modalArray.id;
      if (this.noExtras){
        const E = 1;
        this.extrasArray.toppings.push(E);
        this.noExtras = !this.noExtras;
      }
      if(!this.noExtras && !this.tocinoVar && !this.cebollaVar && !this.pinaVar && !this.jalapenoVar && !this.salchichaVar && !this.quesoVar){
        const E = 1;
        this.extrasArray.toppings.push(E);
        this.noExtras = !this.noExtras;
      }
      if (this.tocinoVar){
        const T = 2;
        this.suma= this.suma + 10;
        this.extrasArray.toppings.push(T);
        this.tocinoVar = !this.tocinoVar;
      }
      if (this.cebollaVar){
        const C = 3;
        this.suma= this.suma + 10;
        this.extrasArray.toppings.push(C);
        this.cebollaVar = !this.cebollaVar;
      }
      if (this.pinaVar){
        const P = 4;
        this.suma= this.suma + 10;
        this.extrasArray.toppings.push(P);
        this.pinaVar = !this.pinaVar;
      }
      if (this.jalapenoVar){
        const J = 5;
        this.suma= this.suma + 10;
        this.extrasArray.toppings.push(J);
        this.jalapenoVar = !this.jalapenoVar;
      }
      if (this.salchichaVar){
        const S = 6;
        this.suma= this.suma + 10;
        this.extrasArray.toppings.push(S);
        this.salchichaVar = !this.salchichaVar;
      }if (this.quesoVar){
        const Q = 7;
        this.suma= this.suma + 10;
        this.extrasArray.toppings.push(Q);
        this.quesoVar = !this.quesoVar;
      }
      this.products.push({
        amount: parseInt(this.extrasArray.amount),
        instructions: this.extrasArray.instructions,
        id_product: this.extrasArray.id_product,
        toppings: this.extrasArray.toppings
      });
    console.log(this.extrasArray);
    console.log(this.lista2);
    console.log(this.suma);
    console.log(this.products);
  }
  removeList(item,i){
  this.list.splice(i,1);
  let R = parseInt(item.precio) * item.cantidad
  this.suma = this.suma - R;
  if (this.extrasArray.toppings[0] != 1){
    let RT = this.extrasArray.toppings.length * 10
    this.suma = this.suma -RT;
  }
  }
  burguerModal(item){
    this.extrasArray.toppings = [];
    this.modalArray.id = item.id;
    this.modalArray.nombre = item.name;
    this.modalArray.descripcion = item.description;
    this.modalArray.imagen = item.image;
    this.modalArray.precio = item.price;
    console.log(this.modalArray);
  }
  crearOrden(){
    const FyH = this.date +' '+this.time;
    const orden = {
      user : parseInt(localStorage.getItem('username')),
      delivery: FyH,
      address: this.direccion,
      products: this.products
    }
    console.log(JSON.stringify(orden));
    this.ws.WS_CREARORDENES(orden).subscribe(data=>{
    console.log(data);
    if (data['message']){
      alert('Orden creada con éxito');
      window.location.reload();
    }
  })
  }



}
