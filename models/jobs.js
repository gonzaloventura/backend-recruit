import { Schema, model, models } from 'mongoose'

const jobSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Ttitle is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    estado: {
        type: Boolean,
        default: true
    },
    postulaciones: {
        type: Number,
        default: 0
    },
    postulados: {
        type: Array,
        default: {}
    }
})

export default models.Job || model('Job', jobSchema)