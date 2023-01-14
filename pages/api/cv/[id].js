import { dbConnect } from '../../../utils/mongoose'
import Cvs from '../../../models/cvs';

dbConnect();

export default async function tasksHandler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const cv = await Cvs.find({job_id: id});
        if (!cv) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(cv);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "PUT":
      try {
        const cv = await Cvs.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!cv) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(cv);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedCv = await Cvs.findByIdAndDelete(id);
        if (!deletedCv)
          return res.status(404).json({ msg: "Task does not exists" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}