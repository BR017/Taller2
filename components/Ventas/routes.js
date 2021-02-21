const express = require('express')
const router = express.Router()
const { createVenta, deleteVenta, getVenta, getVentas, updateVenta } = require('./actions')


// GET all
router.get('/', getVentas)

// GET by ID
router.get('/:id', getVenta)

// POST Create a Book
router.post('/', createVenta)

// PUT Update a Book's info
router.put('/:id', updateVenta)

// DELETE by ID
router.delete('/:id', deleteVenta)

module.exports = router
