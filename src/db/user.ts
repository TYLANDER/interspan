import connection from './connection'
export default class DbUser {
    static getVisits(callback){
        return (connection.query(`SELECT id, name FROM testing`, (err, results) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, results.map((data) => `ID: ${data.id}, NAME: ${data.name}`));
        })) 
    }
}