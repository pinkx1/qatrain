const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Нет токена, авторизация отклонена' });
        return;
    }
    console.log(process.env.JWT_SECRET)
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Неверный или истёкший токен' });
            return;
        }

        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;
