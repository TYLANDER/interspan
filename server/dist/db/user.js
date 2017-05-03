"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
class DbUser {
    static getVisits(callback) {
        return (connection_1.default.query(`SELECT id, name FROM testing`, (err, results) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, results.map((data) => `ID: ${data.id}, NAME: ${data.name}`));
        }));
    }
}
exports.default = DbUser;
