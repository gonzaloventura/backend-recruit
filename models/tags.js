import { Schema, model, models } from 'mongoose'

const tagSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    }
})

export default models.Tag || model('Tag', tagSchema)