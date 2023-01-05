import { Schema, model, models } from 'mongoose'

const jobSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
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
    url_cv: String,
    id_cv: String,
    modalidad: {
        type: String,
        required: [true, 'Se requiere modalidad']
    }
})

export default models.Job || model('Job', jobSchema)