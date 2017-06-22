import express = require("express");
import UserModel from './model';
import { responseJsonHandler } from '../../utils/helper';

/**
 * Controller for user
 */

export default class User {
    // Controller for singUp user
    static signupUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        UserModel.signUp(req.body, ((err, data) => {
            responseJsonHandler(err, data, res);
        }));
    }
    // Controller for login user
    static loginUser(req: express.Request, res: express.Response, next: express.NextFunction) {
        UserModel.login(req.body, ((err, data) => {
            responseJsonHandler(err, data, res);
        }));
    }
}