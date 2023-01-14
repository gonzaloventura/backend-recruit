import { Schema, model, models } from 'mongoose'

const curriculumVitae = new Schema({
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
    dni: {
        type: Number,
        required: [true, 'DNI is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    nacionalidad: {
        type: String,
        required: [true, 'Nacionalidad is required']
    },
    direccion: {
        type: String,
    },
    ciudad: {
        type: String,
    },
    provincia: {
        type: String,
    },
    codigo_postal: {
        type: Number,
    },
    estado: {
        type: Boolean,
        default: true
    },
    experiencia_laboral: {
        type: Array
    },
    estudios: {
        type: Array
    },
    presentacion: {
        type: String
    },
    idiomas: {
        type: Array
    },
    conocimientos: {
        type: Array
    },
    otra_informacion: {
        type: Array
    },
    categorias_interes: {
        type: Array
    },
    observaciones: {
        type: Array
    },
    puntuacion: {
        type: Number
    },
    url_cv: {
        type: String,
        default: null
    }
})

export default models.Cvs || model('Cvs', curriculumVitae)