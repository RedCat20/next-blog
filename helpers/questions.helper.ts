import {questions} from '../pages/api/data/questions'
import {IQuestion} from "../types/questions";

export const getQuestionById = (id: number): IQuestion | object => {
    let quest = questions.find((quest => quest.id.toString() === id.toString()));
    return quest ?? {};
}