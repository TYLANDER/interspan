import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class JobsModel {

    static createTable(cb: CallBackFunction) {
        connection
            .query(`CREATE TABLE jobs (id INT UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(50) NOT NULL,location VARCHAR(50) NOT NULL,duration VARCHAR(50) NOT NULL,hours VARCHAR(50) NOT NULL,compensation VARCHAR(50) NOT NULL,description VARCHAR(600) NOT NULL,PRIMARY KEY (id));`, cb);
    }

    static getJobs(cb: CallBackFunction) {
        connection
            .query(`SELECT * FROM jobs`, cb);
    }

    static insertJob(job, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO jobs SET ?`, job, cb);
    }


}