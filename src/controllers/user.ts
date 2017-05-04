import { DbUser } from '../db/index';

export default class User {

    static getUsers(req,res,next){
        res.send("All Users List");
    }

    static getUserDetais(req,res,next){
        //res.send("User Details");
        DbUser.getVisits((err, data) => {
            if (err) {
                next(err);
                return;
            }
            res.status(200)
                .set('Content-Type', 'text/plain')
                .send(`Last 10 visits:\n${data.join('\n')}`)
                .end();
        });
    }
}