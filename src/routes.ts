
import { User, Jobs } from './controllers/index';
import {Jobs_Modal} from './modals/index'

function routes(app) { 
    
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    
    app.get('/test', User.getUsers);
    app.get('/details', User.getUserDetais);
    app.get('/jobs_table',Jobs_Modal.createTable);
    app.post('/jobs', Jobs.insertJobs);
    app.get('/jobs',Jobs.getJobs);
    //app.get('/users',app.controllers.getUsers);
}

export default routes