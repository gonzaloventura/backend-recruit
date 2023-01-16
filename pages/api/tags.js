import { dbConnect } from '../../utils/mongoose'
import Tag from '../../models/tags'

dbConnect()

export default async function handler(req, res) {
    const { method } = req
    if (req.method === 'GET'){
        const tags = await Tag.find().sort({name: 1});
        res.status(200).json({method, tags});
    }
    if (req.method === 'POST'){
        res.status(200).json({method, name: "POST Request"});
    }
  }