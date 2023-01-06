import { dbConnect } from '../../../utils/mongoose'
import Job from '../../../models/jobs'
import NextCors from 'nextjs-cors';

dbConnect();

export default async function tasksHandler(req, res) {
  const {
    method,
    query: { search },
    body: {
      value,
      location,
      category,
      estado,
      limit,
      page,
      modalidad
    },
  } = req;

  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  let query = {};

    if (req.query.title) {
        query.title = {$regex: req.query.title, $options: 'i' };
    }
    if (req.query.location) {
        query.location = req.query.location;
    }

    if (req.query.category) {
      query.category = { $regex: req.query.category, $options: 'i' };
    }

    if (req.query.estado) {
        query.estado = req.query.estado;
    }

    if (req.query.limit) {
        query.limit = req.query.limit;
    }

    if (req.query.page) {
        query.page = req.query.page;
    }

    if (req.query.modalidad) {
      query.modalidad = {$regex: req.query.modalidad, $options: 'i' };
  }

  switch (method) {
    case "GET":
      try {
        const job = await Job.find(query);
        if (!job) return res.status(404).json({ msg: "Task does not exists" });
        return res.status(200).json(job);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}