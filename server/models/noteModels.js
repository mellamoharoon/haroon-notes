import mongoose from 'mongoose'

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    selectedFile: String,
}, {
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema)

export default Note