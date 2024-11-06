const pool = require('../db');
require('dotenv').config();

async function createUser(username, email, password) {
    const result = await pool.query(
        'INSERT INTO users (username, email, password, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
        [username, email, password]
    );
    return result.rows[0];
}

async function getUserByEmail(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
}

async function getUserById(userId) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
}

async function updateUserProfile(userId, data) {
    const fields = [];
    const values = [];
    let index = 1;

    if (data.username) {
        fields.push(`username = $${index++}`);
        values.push(data.username);
    }

    if (data.email) {
        fields.push(`email = $${index++}`);
        values.push(data.email);
    }

    if (fields.length === 0) {
        return null;
    }

    values.push(userId);
    const query = `UPDATE users SET ${fields.join(', ')} WHERE id = $${index} RETURNING *`;
    const result = await pool.query(query, values);

    return result.rows[0];
}

async function deleteUserById(userId) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    return (result.rowCount ?? 0) > 0;
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    updateUserProfile,
    deleteUserById
};
