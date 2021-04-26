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
    age: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
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