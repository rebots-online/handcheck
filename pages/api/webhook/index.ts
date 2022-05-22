// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { rapydRequest } from 'lib/rapyd'

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {

    console.log(req.body)

    const response = {
        name: 'test'
    }
    
    res.status(200).send(response);
  } catch (e: any) {
    res.status(500).send(e);
  }
}
