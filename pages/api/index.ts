import { NextApiRequest, NextApiResponse } from "next";
import task2 from "./task2";
import task1 from "./task1";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    

    if(req.method === 'POST') {
        return task2(req, res)
    }
    else{
        return task1(req, res)
    }
}