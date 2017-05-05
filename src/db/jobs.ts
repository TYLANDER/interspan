import connection from './connection'

export default class Jobs {
    static createTable(callback) {
        return (connection.query(`CREATE TABLE jobs (id INT UNSIGNED NOT NULL AUTO_INCREMENT,title VARCHAR(50) NOT NULL,location VARCHAR(50) NOT NULL,duration VARCHAR(50) NOT NULL,hours VARCHAR(50) NOT NULL,compensation VARCHAR(50) NOT NULL,description VARCHAR(600) NOT NULL,PRIMARY KEY (id));`, callback))
    }

    static insertJobs(jobs,callback){
        return (connection.query(`INSERT INTO jobs SET ?`,jobs,callback))
    }

    static getJobs(callback) {
        return (connection.query(`SELECT * FROM jobs`, (err, results) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, results.map((data) => data));
        }))
    }
}