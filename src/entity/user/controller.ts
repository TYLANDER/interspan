import express = require("express");
import UserModel from './model';
import { responseJsonHandler } from '../../utils/helper';

export default class User {

    static getUsers(req, res, next) {
        res.send("All Users List");
    }

    static getUserDetais(req: express.Request, res: express.Response) {
        UserModel.getVisits((err, data) => {

            data.map(d => `ID: ${d.id}, NAME: ${d.name}`);

            responseJsonHandler(err, data, res);
        })
    }
}