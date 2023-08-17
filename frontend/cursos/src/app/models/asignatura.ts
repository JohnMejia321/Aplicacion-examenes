export class Asignatura {
    id: number;
    nombre: string;
    padre: Asignatura; // Una asignatura puede tener padres o hijos
    hijos: Asignatura[] = []
}
