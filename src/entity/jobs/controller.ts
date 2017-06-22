import JobsModel from './model';
import express = require("express");
import { responseJsonHandler } from '../../utils/helper';

/**
 * Controller for jobs
 */

export default class Controllers {

    //  controller for insert job
    static insertJobs(req: express.Request, res: express.Response, next: express.NextFunction) {
        JobsModel.insertJob(req.body, ((err, data) => {
            responseJsonHandler(err, data, res);
        }));
    }

    //  controller for fetch job
    static getJobs(req: express.Request, res: express.Response, next: express.NextFunction) {
        JobsModel.getJobs((err, data) => {
            responseJsonHandler(err, data, res);
        });
    }


}