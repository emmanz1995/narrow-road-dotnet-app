const Prayer = require('../model/prayer.model');
const expressAsyncHandler = require('express-async-handler');

const createPrayer = expressAsyncHandler(async (req, res) => {
    const { title, description } = req?.body;
    try {
        const newPrayer = await Prayer.create({
            title, description
        })
        res?.json(newPrayer);
    } catch(error) {
        res?.json(error);
    }
})

const getPrayer = expressAsyncHandler(async (req, res) => {
    try {
        const prayer = await Prayer.find()
        res?.json(prayer);
    } catch(error) {
        res?.json(error);
    }
})
const getSinglePrayer = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const findPrayerById = await Prayer.findById(id)
        res?.json(findPrayerById);
    } catch(error) {
        res?.json(error);
    }
})

const updatePrayer = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const { title, description, answered } = req?.body;
    try {
        const updatePrayerById = await Prayer.findByIdAndUpdate(id, {
            title, description, answered
        }, {
            new: true
        })
        res?.json(updatePrayerById);
    } catch(error) {
        res?.json(error);
    }
})

const deletePrayer = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const deletePrayerById = await Prayer.findByIdAndDelete(id)
        res?.json(deletePrayerById)
    } catch (error) {
        res?.json(error)
    }
})

module.exports = {
    createPrayer,
    getPrayer,
    getSinglePrayer,
    updatePrayer,
    deletePrayer
}

