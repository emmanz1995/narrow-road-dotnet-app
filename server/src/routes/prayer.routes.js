const express = require('express');
const router = express.Router();
const { createPrayer, getPrayer, getSinglePrayer, updatePrayer, deletePrayer } = require('../controller/prayer.controller');

router.post('/api/prayer/create', createPrayer);
router.get('/api/prayer/get', getPrayer);
router.get('/api/prayer/get-single/:id', getSinglePrayer);
router.put('/api/prayer/update/:id', updatePrayer);
router.delete('/api/prayer/delete/:id', deletePrayer);

module.exports = router;
