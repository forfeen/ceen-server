const express = require('express');
const mongoose = require('mongoose');

const Vaccine = mongoose.model('Vaccine');

const router = express.Router();

router.get('/vaccines', async(req, res) => {
    const vaccines = await Vaccine.find({ vaacineId: req.vaccine})
    res.send(vaccines);
});

module.exports = router;