import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class Journal extends Model /*implements ModelI*/ {
    id: number | null = null;
    notas: string;
    idUsuario: number;
    seguimientoDiario: string;
    proyectoSemanal: string;
    fecha: Date;

    constructor(notas: string, idUsuario: any, seguimientoDiario: string, proyectoSemanal: string, fecha: any, id?: number) {
        super();

        if (id) {
            this.id = id;
        };
        this.notas = notas;
        this.idUsuario = idUsuario;
        this.seguimientoDiario = seguimientoDiario;
        this.proyectoSemanal = proyectoSemanal;
        this.fecha = fecha;
    }


}