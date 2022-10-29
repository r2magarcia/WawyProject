import Model from "../models/model";

const { database } = require('../config');
module QuestionService{
    export function getAllQuestions(){
        const query = `SELECT * from ${database}.preguntas WHERE relevanteparadiagnostico = 1`;
        const result = Model.execQuery(query);
        console.log(query);
        
        return result;
    }
}
export default QuestionService;