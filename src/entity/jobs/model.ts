import Jobs from './query';
import express = require("express");
import { responseJsonHandler } from '../../utils/helper';

export default class Jobs_Model {

    static createTable(req:express.Request,res:express.Response,next:express.NextFunction){
        //res.send("User Details");
        Jobs.createTable((err,data)=>responseJsonHandler(err,data,res));
    }
}