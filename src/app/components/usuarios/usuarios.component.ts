import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public empleados! : Array<Empleado>;

  constructor(private _service : UsuariosService) { }

  cargarEmpleados() {
    this._service.getEmpleados().subscribe( res => {
      this.empleados = res;
    })
  }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

}
