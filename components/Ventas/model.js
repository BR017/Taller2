const { Schema,model } = require('mongoose')

const SaleSchema = new Schema({
    date: {
        type: Date
    },
    total: {
        type: Number
    },
    idclient: {
        type: Schema.Types.ObjectId,
        ref: 'clients'
    },
    details: [{
        idbook: {
            type: Schema.Types.ObjectId,
            ref: 'books'
        },
        bookname: {
            type: String
        },
        unitvalue: {
            type: Number
        },
        Quantity: {
            type: Number
        }
    }]
}, {
    timestamps: true
})

const Sale = model('sale', SaleSchema)

module.exports = Sale
