
let config = {
    dbConfig: {
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        socketPath: '',
    }
}

let devConfig = {
    dbConfig: {
        user: 'test',
        password: 'test',
        database: 'admin',
        socketPath: '',
    }
}

export default config;