const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.qdyan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
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

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(3000, () => {
    console.log('Listening 3000');
});