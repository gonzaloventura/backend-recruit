import { dbConnect } from '../../../recruit-next/utils/mongoose'
import Tag from '../../../recruit-next/models/tags'

dbConnect()

export default async function handler(req, res) {
    const { method } = req
    if (req.method === 'GET'){
        const tags = await Tag.find();
        res.status(200).json({method, tags});
    }
    if (req.method === 'POST'){
        res.status(200).json({method, name: "POST Request"});
    }
  }