import Pilot from '../models/wawymodule';
import Model from '../models/model';

const { database } = require('../config');

module wawyservice {

    export function getAllPilots(){
        const query = 'SELECT * FROM ${database}.estados_emocionales';
        const result = Model.execQuery(query);
        return result;
    }
    
    /*export function CreatePilot(pilot : Pilot){
        return pilot.create();
        
    }
    
    export function update(pilot : Pilot){
        console.log(pilot);
        return pilot.update();
    }
    
    export function del(pilot : Pilot){
        return pilot.del();
    }
    
    export function seeByPodium(numPodio : number): Promise<any>{
        return Pilot.getByPodium(numPodio);
    }
    
    export function see3Best(){
        return Pilot.get3Best();
    }
    
    export function updateNick(pilot: Pilot, apodo : string){
        pilot.setApodo(apodo);

        return pilot.update;
        
    }
    

    //TODO que rayos es points
    export function seeByPoints(){
        return Pilot.seeByPoints();
    }*/

    export function getById(id: number){
        const query = `SELECT * from ${database}.estados_emocionales where idemocion = ${id}`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default wawyservice;