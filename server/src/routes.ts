
import { User } from './controllers';
let path = require("path");

function routes(app) {
    
    app.get('*', (req, res) => {
        res.render('index.html');
    });

    app.get('/test', User.getUsers);
    app.get('/details', User.getUserDetais);
    //app.get('/users',app.controllers.getUsers);
}

export default routes