import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class Answer extends Model /*implements ModelI*/{
    idAns: number | null = null;
    pregunta: string;
    respuesta: string;
    fecha: Date;
    idUser: number;

    constructor(pregunta: string, respuesta: string, fecha:Date, idUser:number, idAns?: number){
        super();

        if (idAns){
            this.idAns=idAns;
        };
        this.pregunta=pregunta;
        this.respuesta=respuesta;
        this.fecha=fecha;
        this.idUser=idUser;
    }         
    

}