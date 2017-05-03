
import { User } from './controllers'

function routes(app){
    app.get('/test', User.getUsers);
    app.get('/details', User.getUserDetais);
    //app.get('/users',app.controllers.getUsers);
}


export default routes