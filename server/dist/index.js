"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const routes_1 = require("./routes");
let app = express();
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
let path = require("path");
app.use(express.static(path.resolve(__dirname, '../../client/build')));
routes_1.default(app);
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
