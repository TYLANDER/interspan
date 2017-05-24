import express = require("express");
import UserModel from './model';
import { responseJsonHandler } from '../../utils/helper';

export default class User {

    static signupUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        UserModel.signUp(req.body, ((err, data) => {
            responseJsonHandler(err, data, res);
        }));
    }

    static loginUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        UserModel.login(req.body, ((err, data) => {
            responseJsonHandler(err, data, res);
        }));
    }
}