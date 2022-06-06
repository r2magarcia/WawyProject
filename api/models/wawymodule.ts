import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class Pilot extends Model /*implements ModelI*/{
    idPiloto: number | null = null;
    nombre: string;
    apodo: string;
    podios: number;
    victorias: number;
    idCarroFav: number;
    equipo_idEquipo: number;

    constructor(idPiloto: number, nombre: string, apodo: string, podios: number, victorias: number, idCarroFav: number, equipo_idEquipo: number){
        super();
        this.idPiloto=idPiloto;
        this.nombre=nombre;
        this.apodo=apodo;
        this.podios=podios;
        this.victorias=victorias;
        this.idCarroFav=idCarroFav;
        this.equipo_idEquipo=equipo_idEquipo;
    }         
    
    /*static read(): Promise<any> {
        const query = 'SELECT * FROM `estados_emocionales`';
        const result = Model.execQuery(query);
        return result;
    }*/

}