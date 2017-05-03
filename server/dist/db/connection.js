"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const mysql_1 = require("mysql");
//let mysql = require('mysql');
if (process.env.INSTANCE_CONNECTION_NAME) {
    config_1.default.dbConfig.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}
let connection = mysql_1.createConnection(config_1.default.dbConfig);
exports.default = connection;
