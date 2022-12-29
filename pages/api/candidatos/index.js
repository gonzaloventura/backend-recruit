import { dbConnect } from '../../../utils/mongoose'
import Candidato from '../../../models/candidatos'

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const candidatos = await Candidato.find();
        return res.status(200).json(candidatos);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        const newCandidato = new Candidato(body);
        const savedCandidato = await newCandidato.save();
        return res.status(201).json(savedCandidato);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};