"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("./controllers");
let path = require("path");
function routes(app) {
    app.get('*', (req, res) => {
        res.render('index.html');
    });
    app.get('/test', controllers_1.User.getUsers);
    app.get('/details', controllers_1.User.getUserDetais);
    //app.get('/users',app.controllers.getUsers);
}
exports.default = routes;
