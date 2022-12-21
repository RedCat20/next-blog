import { questions } from "./data/questions";
import {IQuestion} from "../../types/questions";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IQuestion[]>
) {
    const { pid } = req.query;
    if (req.method === 'GET') {
        res.status(200).json(questions)
    }
}

