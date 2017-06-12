import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class applyModel {


    static insertJobForm(data, cb: CallBackFunction) {
        // connection
        //     .query(`INSERT INTO application_form SET ?`, data, cb);
        console.log(data);
    }

}