import { Jobs } from '../db/index';

export default class Jobs_Model {

    static createTable(req,res,next){
        //res.send("User Details");
        Jobs.createTable((err, data) => {
            if (err) {
                next(err);
                return;
            }
            console.log(data);
        });
    }
}