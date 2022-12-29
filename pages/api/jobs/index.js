import { dbConnect } from '../../../utils/mongoose'
import Job from '../../../models/jobs'

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const jobs = await Job.find();
        return res.status(200).json(jobs);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        const newJob = new Job(body);
        const savedJob = await newJob.save();
        return res.status(201).json(savedJob);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};