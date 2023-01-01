import { dbConnect } from '../../../utils/mongoose'
import Job from '../../../models/jobs'
import NextCors from 'nextjs-cors';


dbConnect();

export default async function tasksHandler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;

  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
 });

  switch (method) {
    case "GET":
      try {
        const job = await Job.findById(id);
        if (!job) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(job);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "PUT":
      try {
        const job = await Job.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
          headers: {'Access-Control-Allow-Origin': '*'}
        });
        if (!job) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(job);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedTask = await Job.findByIdAndDelete(id);
        if (!deletedTask)
          return res.status(404).json({ msg: "Task does not exists" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}