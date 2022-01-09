const express = require('express');
const router = express.Router();
const { createTestimony } = require('../controller/testimony.controller');

router.post('api/testimony/:id', createTestimony);
