import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class Curso {
    id: number;
    nombre: string;
    createAt: string;
    alumnos: Alumno[] = []; // Arreglo de objetos tipo Alumno, se inicializa como un arreglo vacio
    examenes: Examen[] = [];
}
