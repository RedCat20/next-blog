import { questions } from "../data/questions";
import {IQuestion} from "../../../types/questions";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getQuestionById} from "../../../helpers/questions.helper";

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IQuestion>
) {
    //console.log('method', req.method)
    const questId = req.query.questId;
    //console.log('questId', questId)
    const question = getQuestionById(questId);
    // res.end(`Post: ${pid}`)
    if (req.method === 'GET') {
        //res.status(200).json(questions[0])
        res.status(200).json(<IQuestion>question)
    }
}

