import config from '../config/index';
import { createConnection } from 'mysql'

if (process.env.INSTANCE_CONNECTION_NAME) {
    config.dbConfig.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}

// Create connection
let connection = createConnection(config.dbConfig);
export default connection;