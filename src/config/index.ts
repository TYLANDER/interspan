// Database configuration for production environment
let config = {
    dbConfig: {
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        socketPath: '',
        multipleStatements:true
    }
}

// Database configuration for development environment
let devConfig = {
    dbConfig: {
        user: 'test',
        password: 'test',
        database: 'admin',
        socketPath: '',
        port:5432,
        multipleStatements:true
    }
}

export default devConfig;