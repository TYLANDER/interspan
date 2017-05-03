import * as http from "http";  
import * as express from "express";    
import * as bodyParser from "body-parser";  
import * as methodOverride from "method-override";
import routes from './routes';
import { join } from 'path';


let app: express.Application = express();

app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(methodOverride());
let path = require("path");

app.use(express.static(path.resolve(__dirname,'../../client/build')));
routes(app);


let port: number = process.env.PORT ? process.env.PORT : 3306;

const server = http.createServer(app);  
server.listen(port);

server.on('error', onError);  
server.on('listening', onListening);

function onError(error: NodeJS.ErrnoException) : void {  
    throw error;
}

function onListening(): void {  
    console.log('Listening on port ' + server.address().port);
}