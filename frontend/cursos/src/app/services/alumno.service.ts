import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

// No se requiere que lo registremos en el Modulo
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
    private baseEndpoint = 'http://localhost:8090/api/alumnos'; // Valor de nuestra ruta por defecto Endpoing al Backend (al Gateway)
    constructor(private http: HttpClientModule) { }
}
