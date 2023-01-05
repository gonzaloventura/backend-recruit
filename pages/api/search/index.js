import { dbConnect } from '../../../utils/mongoose'
import Job from '../../../models/jobs'
import NextCors from 'nextjs-cors';


dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
 });

  switch (method) {
    case "GET":
      try {
        const jobs = await Job.find();
        return res.status(200).json(jobs);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};