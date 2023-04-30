const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
require('./src/routes/index')(app);
app.use(cors());
app.use(express.json());
app.listen(8080);