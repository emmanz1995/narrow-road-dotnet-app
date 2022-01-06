const mongoose = require('mongoose');
const { Schema } = mongoose;

const prayerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'prayer'
    },
    answered: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Prayer = mongoose.model('prayer', prayerSchema);

module.exports = Prayer;
