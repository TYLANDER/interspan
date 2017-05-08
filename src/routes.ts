import {router as jobsRouter} from './entity/jobs/route';
import {router as userRouter} from './entity/user/route';


function routes(app) { 
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    //Rest API's
    app.use("/api/user",userRouter)
    app.use("/api/jobs",jobsRouter);
}

export default routes