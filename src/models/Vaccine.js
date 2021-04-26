const mongoose = require('mongoose');
const vaccineSchema = new mongoose.Schema({
    vaacineId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    developer: {
        type: String,
        default: ''
    },
    average_per_dose: {
        type: Number,
        default: 0,
        min: 0,
        max: 4000
    },
    performance: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    link_info: {
        type: String,
        default: ''
    },
});

mongoose.model('Vaccine', vaccineSchema);