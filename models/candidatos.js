import { Schema, model, models } from 'mongoose'

const candidatosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre is required'],
        trim: true
    },
    apellido: {
        type: String,
        required: [true, 'Apellido is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    dni: {
        type: String,
        required: [true, 'DNI is required']
    },
    estado: {
        type: Boolean,
        default: true
    },
    job_id: {
        type: String
    }
})

export default models.Candidato || model('Candidato', candidatosSchema)