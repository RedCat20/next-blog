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
    console.log('method', req.method)
    const { pid } = req.query;
    console.log('pid', pid)
    // res.end(`Post: ${pid}`)
    if (req.method === 'GET') {

        // if (pid) {
        //     res.status(200).json(questions[0]);
        //     //res.end(`Post: ${pid}`)
        // }

        res.status(200).json(questions)
    }
}

