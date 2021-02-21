const Venta = require('./model')

const createVenta = (req, res) => {

    const newBook = new Venta(req.body)
    newBook.save((error, bookSaved) => {
        if (error) {
            res.status(422).send(error)
        } else {
            res.status(201).send(bookSaved)
        }
    })
}

const deleteVenta = (req, res) => {
    Venta.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send({mensaje:'Eliminado'})
        }
    })
}

const getVenta = (req, res) => {
    Venta.findById(req.params.id, (error, book) => {
        if (error) {
            res.status(500).send(error)
        } else if (book) {
            res.send(book)
        } else {
            res.status(404).send({})
        }
    })
}

const getVentas = (req, res) => {
    let query = req.query
    if (req.query.name) {
        query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
    }

    Venta.find(query, (error, books) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.send(books)
        }
    })
}

const updateVenta = (req, res) => {
    Venta.updateOne({ _id: req.params.id }, req.body, (error, result) => {
        if (error) {
            res.status(422).send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports = { createVenta, deleteVenta, getVenta, getVentas, updateVenta }