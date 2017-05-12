import JobsModel from './model';
import express = require("express");
import { responseJsonHandler } from '../../utils/helper';

export default class Controllers {

    static insertJobs(req: express.Request, res: express.Response, next: express.NextFunction) {
        JobsModel.insertJob(req.body, ((err, data) => {
            responseJsonHandler(err, data, res);
        }));
    }

    static getJobs(req: express.Request, res: express.Response, next: express.NextFunction) {
        JobsModel.getJobs((err, data) => {
            responseJsonHandler(err, data, res);
        });
    }


}