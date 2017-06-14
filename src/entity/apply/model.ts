import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class applyModel {


    static async insertJobForm(data, callback: CallBackFunction) {
        
        let a:any = applyModel.saveApplication(data);
        let b:any = applyModel.saveApplication2(data);

        try{
            a = await a;
            b = await b;
            callback(null,"Applied job successfully");
        }
        catch(err){
            callback(err,null);
        }
    }

    static async saveApplication(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO application_form SET ?`, data.application_form, function (err, result) {
                if(err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async saveApplication2(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO application_form SET ?`, data.application_form, function (err, result) {
                if(err)
                    reject(err);
                else resolve(result);
            });
        })
    }

}