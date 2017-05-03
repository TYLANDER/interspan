"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class User {
    static getUsers(req, res, next) {
        res.send("All Users List");
    }
    static getUserDetais(req, res, next) {
        //res.send("User Details");
        db_1.DbUser.getVisits((err, data) => {
            if (err) {
                next(err);
                return;
            }
            res.status(200)
                .set('Content-Type', 'text/plain')
                .send(`Last 10 visits:\n${data.join('\n')}`)
                .end();
        });
    }
}
exports.default = User;
