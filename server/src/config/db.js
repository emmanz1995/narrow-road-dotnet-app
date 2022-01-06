const mongoose = require('mongoose');
const { URI_DB } = require('./keys');

const db = async () => {
    try {
        await mongoose.connect(URI_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('MongoDB Connection Established!')
    } catch(error) {
        console.log('MongoDB Connection Failed:', error)
        process.exit(1)
    }
}

module.exports = db;
