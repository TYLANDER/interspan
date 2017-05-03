"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const routes_1 = require("./routes");
const path_1 = require("path");
//import config from './config';
let app = express();
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.set('views', path_1.join(__dirname, '../../client/build'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '../../client/build'));
routes_1.default(app);
/*
require('./config/index')(app);
require('./db/index')(app,mysql);
require("./controllers/index")(app);
require("./modals/index")(app);
require("./API/index")(app,mysql);
require("./routes/index")(app);
require("./Utils/Users")(app);
*/
let port = process.env.PORT ? process.env.PORT : 3306;
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function onError(error) {
    throw error;
}
function onListening() {
    console.log('Listening on port ' + server.address().port);
}
