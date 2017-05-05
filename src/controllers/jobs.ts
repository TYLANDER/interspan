import { Jobs } from '../db/index';

export default class Job {
    static insertJobs(req,res,next) {
        Jobs.insertJobs(req.body,((err,data)=>{
            if(err){
                next(err);
                return;
            }
            res.status(200)
            .json({success:true})
        }))
    }
    static getJobs(req,res,next){

        Jobs.getJobs((err, data) => {
            if (err) {
                next(err);
                return;
            }
            res.status(200)
                .type('json')
                .json(data)
                .end();
        });
    }
}