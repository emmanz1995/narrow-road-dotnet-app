const Testimony = require('../model/testimony.model');
const Prayer = require('../model/prayer.model');
const expressAsyncHandler = require('express-async-handler');

const createTestimony = expressAsyncHandler(async (req, res) => {
    const { title, description } = req?.body;
    try {
    } catch(error) {}
})

module.exports = {
    createTestimony
}
