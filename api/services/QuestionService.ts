import Model from "../models/model";

const { database } = require('../config');
module QuestionService{
    export function getAllQuestions(){
        const query = `SELECT * from ${database}.preguntas`;
        const result = Model.execQuery(query);
        return result;
    }
}
export default QuestionService;