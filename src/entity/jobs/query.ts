import connection from '../../db/connection';
import { CallBackFunction } from '../../utils/helper';

export default class Jobs {
    static createTable(cb:CallBackFunction) {
        return (connection.query(`CREATE TABLE jobs (id INT UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(50) NOT NULL,location VARCHAR(50) NOT NULL,duration VARCHAR(50) NOT NULL,hours VARCHAR(50) NOT NULL,compensation VARCHAR(50) NOT NULL,description VARCHAR(600) NOT NULL,PRIMARY KEY (id));`, cb))
    }

    static insertJobs(jobs,cb:CallBackFunction){
        return (connection.query(`INSERT INTO jobs SET ?`,jobs,cb))
    }

    static getJobs(cb:CallBackFunction) {
        return (connection.query(`SELECT * FROM jobs`,cb))
    }
}