import { Examen } from "./examen";

export class Pregunta {
    id: number;
    texto: string;
    examen: Examen; // Esta asosiada a un examen
}
