import * as http from "http";  
import * as express from "express";    
import * as bodyParser from "body-parser";  
import * as methodOverride from "method-override";
import * as path from "path";
import routes from './routes';
import { join } from 'path';

//Allow CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

let app: express.Application = express();
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(allowCrossDomain);
app.use(express.static('client/build'));
app.use([
    '/signup','/job','/login',"/add","about","employee"
], (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//Setting routes to server
routes(app);

let port: number = process.env.PORT || 3300;

//Creating server 
const server = http.createServer(app);  
server.listen(port);
server.on('error', onError);  
server.on('listening', onListening);

// Handling server errors
function onError(error: NodeJS.ErrnoException) : void {  
    throw error;
}

// Listening server
function onListening(): void {  
    console.log('Listening on port ' + server.address().port);
}