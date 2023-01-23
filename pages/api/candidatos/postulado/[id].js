import { dbConnect } from '../../../../utils/mongoose'
import Candidato from '../../../../models/candidatos'

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
        const candidato = await Candidato.find({_id: id});
        if (!candidato) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(candidato);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "PUT":
      try {
        const candidato = await Candidato.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!candidato) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(candidato);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedTask = await Candidato.findByIdAndDelete(id);
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