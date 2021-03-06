require('./models/Vaccine');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const VaccineRoutes = require('./routes/vaccineRoutes');

const app = express();

app.use(bodyParser.json());
app.use(VaccineRoutes);



mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo');
})

mongoose.connection.on('error', (err) => {
    console.log('Error!', err);
})

app.get('/',(req, res) => {
    res.send('a');
});

app.listen(3000, () => {
    console.log('Listening 3000');
});