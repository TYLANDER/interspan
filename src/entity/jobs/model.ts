import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

/**
 * Model for jobs
 */

export default class JobsModel {
    // model for create table
    static createTable(cb: CallBackFunction) {
        connection
            .query(`CREATE TABLE jobs (id INT UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(50) NOT NULL,location VARCHAR(50) NOT NULL,duration VARCHAR(50) NOT NULL,hours VARCHAR(50) NOT NULL,compensation VARCHAR(50) NOT NULL,description VARCHAR(600) NOT NULL,PRIMARY KEY (id));`, cb);
    }
    //model for fetch jobs
    static getJobs(cb: CallBackFunction) {
        connection
            .query(`SELECT * FROM jobs`, cb);
    }
    //model for insert job
    static insertJob(job, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO jobs SET ?`, job, cb);
    }


}