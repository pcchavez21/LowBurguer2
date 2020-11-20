import { Component, OnInit } from '@angular/core';
import { WsService} from '../../services';
import {Subject} from "rxjs";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  table : any;
  constructor(public ws: WsService, private modalService: NgbModal,private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      autoWidth: true,
      pageLength: 5,
      pagingType: 'full_numbers',
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ registros",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    }
    this.ws.WS_ORDENES().subscribe(data => {
      this.table = data;
      console.log(data);
      this.dtTrigger.next();
    });
  }

}
