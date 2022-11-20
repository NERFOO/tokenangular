import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuariosService {
    constructor(private _http : HttpClient) { }

    post(usuario : Usuario) : Observable<any> {
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/auth/login";
        var url =  environment.urlUser + request;

        return this._http.post(url, json, {headers : header});
    }

    getEmpleados() : Observable<any> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.urlUser + '/api/empleados/';
        return this._http.get(url, { headers: cabecera });
    }

    getEmpleadosId(id : string) : Observable<any> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.urlUser + '/api/empleados/' + id;
        return this._http.get(url, { headers: cabecera });
    }
}