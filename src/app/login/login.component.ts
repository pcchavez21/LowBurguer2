import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import { WsService} from "../services";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, public ws: WsService, public router: Router) {
    this.formulario();
  }

  ngOnInit(): void {
    //this.getUsers();
  }
  //getUsers(){
    //this.ws.WS_USERS().subscribe(data =>{
      //console.log(data);
    //})
  //}
  formulario(){
    this.formLogin = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  login(){
    const provider = this.formLogin.value;
    console.log(provider);
    this.ws.WS_LOGIN(provider).subscribe(data =>{
      console.log(data);
      if(data['rol'] == 2){
        localStorage.setItem('login','true');
        localStorage.setItem('email', this.formLogin.value.email);
        console.log("Log in");
        this.router.navigate(['/home']);
      }else{
        console.log("Error de Credenciales");
        alert("Las credenciales no son correctas");
      }
    });

  }

}

