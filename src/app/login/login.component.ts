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

  }

  formulario(){
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(){
    const provider = {
      email : this.formLogin.value.email,
      password: this.formLogin.value.password,
    };
    this.ws.WS_LOGIN(provider.email, provider.password).subscribe(data => {
      console.log(data);
      console.log(data['user'][0].rol);
      if (data['user'][0].rol == 2){
        localStorage.setItem('login','true');
        localStorage.setItem('username',data['user'][0].id);
        console.log("Log in");
        this.router.navigate(['/home']);
      }else{
        console.log("Error de Credenciales");
        alert("Las credenciales no son correctas");
      }
    }
    );

  }

}

