import { dbConnect } from '../../../../utils/mongoose'
import Job from '../../../../models/jobs'

dbConnect();

export default async function tasksHandler(req, res) {
  const {
    method,
    query: { category },
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const job = await Job.find({category: category});
        if (!job) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(job);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}