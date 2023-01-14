import { dbConnect } from '../../../utils/mongoose'
import Cvs from '../../../models/cvs';

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const newCv = new Cvs(body);
        const savedCv = await newCv.save();
        return res.status(201).json(savedCv);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};