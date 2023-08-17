import { Alumno } from "./alumno";
import { Pregunta } from "./pregunta";

export class Respuesta {
    id: string; // Este atributo es opcional
    texto: string;
    alumno: Alumno;
    pregunta: Pregunta;
}
