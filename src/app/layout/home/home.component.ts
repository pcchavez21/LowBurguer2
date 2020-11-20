import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  editOrden = {Producto:'', Extras:''};
  list = [{img:'assets/images/regular.jpg', extras: 'cebolla', precio:'120'}];
  lista2 = [];
  card = [{
    img: 'assets/images/miller.jpg',
    name: 'jalapeño'
  }];
  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  open(content) {
    this.modalService.open(content,{size: 'sm',centered: true});
  }
  addList(product){
    this.lista2.push({
      imagen:product.img,
      extra: product.name,
      precio: '250'
    });
    console.log(this.lista2);
  }
  removeList(item){
  this.lista2.splice(item,1);
  }

}
