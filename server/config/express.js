const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('../routes');
const cors = require('cors');
const consign = require('consign');
const app = express();

consign().include('server/controller').into(app);

app.use(cors({origin: '*', methods: '*', allowedHeaders: '*'}))
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
module.exports = app;