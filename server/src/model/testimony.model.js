const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const testimonySchema = new Schema({
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    type: {
        type: String,
        default: 'testimony'
    },
    prayedBy: {
        type: ObjectId,
        ref: 'prayer',
    }
}, { timestamps: true })

const Testimony = mongoose.model('testimony', testimonySchema)
module.exports = Testimony;
