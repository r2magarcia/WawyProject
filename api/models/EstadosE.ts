import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class EstadoE extends Model /*implements ModelI*/{
    idemocion: number | null = null;
    texto: string;
    color: string;

    constructor(texto:string, color:string, idemocion?: number){
        super();

        if (idemocion){
            this.idemocion=idemocion;
        };
        this.texto=texto;
        this.color=color;
    }         
    

}