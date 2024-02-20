const { Pool } = require('pg');

const pool = new Pool({
    user: 'gauri',
    host: 'localhost',
    database: 'Alarm',
    password: '12345',
    port: 5432
});

pool.on('connect', (err) => {
    if(err){
        console.error('connection error', err.stack)
    }
    else {
        console.log('Connected the db')
    }
})

/* pool.on('connect', () => {
    console.log('Connected');
});
*/

module.exports = pool;