import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {
  public empleado! : Empleado;

  constructor(private _ActivatedRoute : ActivatedRoute, private _service : UsuariosService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['id'] != null) {
        var id = parametros['id'];
        this._service.getEmpleadosId(id).subscribe( res => {
          this.empleado = res;
        })
      }
    })
  }

}
