import applyModel from './model';
import express = require("express");
import { responseJsonHandler } from '../../utils/helper';

export default class Controllers {

    static insertApplicationForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
        applyModel.insertApplicationForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }

        static insertJobLocationForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
        applyModel.insertJobLocationForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }

    static insertEducationForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
        applyModel.insertEducationForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }

    static insertCommunicationForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
        applyModel.insertCommunicationForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }

    static insertMediaForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
        applyModel.insertMediaForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }

      static insertPersonalForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
       applyModel.insertPersonalForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }

    static insertTransportationForm(req:express.Request, res: express.Response,next:express.NextFunction)
    {
       applyModel.insertTransportationForm(req.body,((err,data)=>{
            responseJsonHandler(err,data,res);
        }))
    }
    
    


}