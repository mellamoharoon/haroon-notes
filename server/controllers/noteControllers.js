import Note from '../models/noteModels.js'
import mongoose from 'mongoose'

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find()

        res.status(200).json(notes)
    } catch (error) {
        console.log({message: error.message})
    }
}

export const createNote = async (req, res) => {
    const note = req.body

    const newNote = new Note(note)

    try {
        await newNote.save()

        res.status(201).json(newNote)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateNote = async (req, res) => {
    const {id} = req.params
    const note = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No note with that id')

    const updatedNote = await Note.findByIdAndUpdate(id, {...note, id}, {new: true})

    res.json(updatedNote)
}

export const deleteNote = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No note with that id')

    await Note.findByIdAndRemove(id)

    res.json({message: 'Post successfully deleted!'})
}