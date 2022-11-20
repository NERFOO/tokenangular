import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token! : string;

  @ViewChild("username") userName! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(private _service : UsuariosService, private _router : Router) { }

  cargarToken() : void {
    var userName = this.userName.nativeElement.value;
    var password = this.password.nativeElement.value;
    var newUser = new Usuario(userName, password);

    this._service.post(newUser).subscribe( res => {
      this.token = res;
      console.log(this.token)
      localStorage.setItem('token', res.response);
      this._router.navigate(["/empleados/"]);
    })
  }

  ngOnInit(): void {
  }

}
