import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, map } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from '../models/alumno';

// No se requiere que lo registremos en el Modulo
@Injectable({
    providedIn: 'root'
})
export class AlumnoService {

    private baseEndpoint = 'http://localhost:8090/api/alumnos'; // Valor de nuestra ruta por defecto Endpoing al Backend (al Gateway)

    private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    // Retorn a una Observable tipo listado de Alumnos
    public listar(): Observable<Alumno[]> {

        return this.http.get<Alumno[]>(this.baseEndpoint);

        // return this.http.get<tipo_dato>(endpoint_url);
        // return this.http.get<Alumno[]>(this.baseEndpoint);

        // [Forma Alternativa]
        // return this.http.get(this.baseEndpoint).pipe(
        //   // Operadores

        //   // [Forma Alternativa]
        //   // map(alumnos => {
        //   //   return alumnos as Alumno[]; // Casting a la variable 'alumnos' para hacerla de tipo Alumno[]
        //   // }) 
        //   map(alumnos => alumnos as Alumno[]) // Casting a la variable 'alumnos' para hacerla de tipo Alumno[] 
        // );
    }

    // Retorna un Observable
    public ver(id: number): Observable<Alumno> {
        // return this.http.get<Alumno>(this.baseEndpoint + '/' + id);
        return this.http.get<Alumno>(`${this.baseEndpoint}/${id}`);
    }

    // Se envia un JSON de tipo Alumno en el Body (o Cuerpo) del Request, el cual sera enviado al Backend
    // Retorna el Alumno guardado, con el id
    public crear(alumno: Alumno): Observable<Alumno> {
        // Hay que asignar o configurar las Cabeceras HTTP del Request con el tipo de Contenido (Content Type) 'Application JSON'
        // (method) HttpClient.post<Alumno>(url: string, body: any, options: { head HttpHeaders |},  ...)
        return this.http.post<Alumno>(this.baseEndpoint, alumno, { headers: this.cabeceras });
    }

    // Retorna el Alumno editado, con el id
    public editar(alumno: Alumno): Observable<Alumno> {
        // (method) HttpClient.put<Alumno>(url: string, body: any, options: { head HttpHeaders |},  ...)
        return this.http.put<Alumno>(
            `${this.baseEndpoint}/${alumno.id}`,
            alumno,
            { headers: this.cabeceras }
        );
    }

    // Retorna un 'No-content', es decir, nada (void)
    public eliminar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
    }

}