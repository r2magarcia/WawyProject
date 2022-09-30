import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class Diary extends Model /*implements ModelI*/ {
    id_diario: number | null = null;
    fecha: Date;
    estados_emocionales_idemocion: number;
    usuarios_idusuario: number;

    constructor(fecha: Date, estados_emocionales_idemocion: number, usuarios_idusuario: number, id_diario?: number) {
        super();

        if (id_diario) {
            this.id_diario = id_diario;
        };
        this.fecha = fecha;
        this.estados_emocionales_idemocion = estados_emocionales_idemocion;
        this.usuarios_idusuario = usuarios_idusuario;
    }


}