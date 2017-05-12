import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class UserModel {

    // For Testing MOdel
    static getVisits(cb: CallBackFunction) {
        connection.query(`SELECT id, name FROM testing`, cb);
        // (err, results) => {
        //     if (err) {
        //         cb(err, null);
        //     }
        //     cb(null, results.map((data) => `ID: ${data.id}, NAME: ${data.name}`));
        // })) 
    }

}