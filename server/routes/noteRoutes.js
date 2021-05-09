import express from 'express'
const router = express.Router()

import {getNotes, createNote, updateNote, deleteNote} from '../controllers/noteControllers.js'

router.get('/', getNotes)

router.post('/', createNote)

router.patch('/:id', updateNote)

router.delete('/:id', deleteNote)

export default router