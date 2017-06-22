import {router as jobsRouter} from './entity/jobs/route';
import {router as userRouter} from './entity/user/route';
import {router as applyRouter} from './entity/apply/route';

/**
 * Routing configutation
 */

function routes(app) { 
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    //Rest API's
    app.use("/api/user",userRouter)
    app.use("/api/jobs",jobsRouter);
    app.use("/api/apply",applyRouter)
}

export default routes