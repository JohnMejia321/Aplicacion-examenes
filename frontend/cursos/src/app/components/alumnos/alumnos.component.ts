import { Component } from '@angular/core';

@Component({
    selector: 'app-alumnos',
    templateUrl: './alumnos.component.html',
    styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
    // titulo: string = 'Listado de Alumnos'; // El tipo de puede omitir, ya que se asume que es un string
    titulo = 'Listado de Alumnos';

    // constructor() {}
    // ngOnInit() {}
}
