const express = require('express');
const cors = require('cors');
const path = require('path');
const router = express.Router();

// initialize our express app
const app = express();
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static('frontend/dist'));
app.use('/', router);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is up and running on port numner');
});