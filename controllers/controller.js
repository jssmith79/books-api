//port configuration

const db = require('../models/models')
const router = require('express').Router()


// Delete One
router.delete('/books/:id', (req, res) => {
    db.findById(req.params.id)
    .then((books) => {
        res.json(books)
    })
    .catch(err => console.log(err))
})

// Update One
router.put('/books/:id', (req, res) => {
    db.findByIdAndUpdate(req.params.id)
    .then((books) => {
        res.json(books)
    })
    .catch(err => console.log(err))
})

// Show one
router.get('/books/:id', (req, res) => {
    db.findById(req.params.id)
    .then((books) => {
        res.json(books)
    })
    .catch(err => console.log(err))
})

// All books
router.get('/books', (req, res) => {
    db.find()
    .then((books) => {
        res.json(books)
    })
    .catch(err => console.log(err))
})

// New Book
router.post('/', (req, res) => {
    db.create()
    .then((books) => {
        res.json(books)
    })
    .catch(err => console.log(err))
})

module.exports = router
