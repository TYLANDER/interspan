import * as http from "http";  
import * as express from "express";    
import * as bodyParser from "body-parser";  
import * as methodOverride from "method-override";
import routes from './routes';
import { join } from 'path';
//import config from './config';


let app: express.Application = express();

app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(methodOverride());

app.set('views', join(__dirname, '../../client/build'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '../../client/build')); 


routes(app);

/*
require('./config/index')(app);
require('./db/index')(app,mysql);
require("./controllers/index")(app);
require("./modals/index")(app);
require("./API/index")(app,mysql);
require("./routes/index")(app);
require("./Utils/Users")(app);
*/

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