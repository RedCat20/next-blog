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
    const questId = req.query.questId;
    const question = getQuestionById(questId);
    if (req.method === 'GET') {
        res.status(200).json(<IQuestion>question)
    }
}

