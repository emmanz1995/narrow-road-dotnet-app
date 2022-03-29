const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

const db = async () => {
    const password = process.env.DB_PASSWORD;
    try {
        await mongoose.connect(`mongodb+srv://root:${password}@cluster0.wxgzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
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
