const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testify',
    password: "DcnAeLX9RC@u-sbjvx4wwgic8",
    port: 5432,
});

pool.on('connect', () => {
    console.log('Успешное подключение к базе данных');
});

module.exports = pool;
