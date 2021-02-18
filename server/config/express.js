const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('../routes');
const cors = require('cors');
const app = express();

app.use(cors({origin: '*', methods: '*', allowedHeaders: '*'}))
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
module.exports = app;