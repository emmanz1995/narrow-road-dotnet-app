const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const { errorHandler, /* notFound */ } = require('./middleware/errorHandler');
const prayerRoute = require('./routes/prayer.routes');
const dotenv = require('dotenv');
dotenv.config()

const PORT = 5001;
db();

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(prayerRoute)

// app.use(notFound)
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Listening on PORT: ${PORT}`);
})
