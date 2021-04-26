const express = require('express');
const mongoose = require('mongoose');

const Vaccine = mongoose.model('Vaccine');

const router = express.Router();

router.get('/vaccines', async(req, res) => {
    const vaccines = await Vaccine.find({ vaacineId: req.vaccine})
    res.send(vaccines);
});

router.post('/vaccines', async(req, res) => {
    const {name, description, developer, average_per_dose, performance, link_info  } = req.body;

    if (!name || !description || !developer || !average_per_dose || !performance || !link_info) {
        return res
            .status(422)
            .send({error: 'Please input the data'}); 
    }
    try {
        const vaccine = new Vaccine({name, description, developer, average_per_dose, performance, link_info});
        await vaccine.save();
        res.send(vaccine);
    } catch(err) {
        res.status(422).send({ error: err.message});
    }

});
module.exports = router;