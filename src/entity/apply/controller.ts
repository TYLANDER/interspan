import applyModel from './model';
import express = require("express");
import { responseJsonHandler } from '../../utils/helper';

export default class Controllers {

    static insertJobForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
        applyModel.insertJobForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }


}