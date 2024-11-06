const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail, getUserById, updateUserProfile, deleteUserById } = require('../models/User');
const pool = require('../db');
const authenticateToken = require('../middleware/authMiddleware');
require('dotenv').config();

const router = express.Router();

// Обработчик регистрации пользователя
router.post('/register', async (req, res) => {
    console.log('POST запрос на /register');
    console.log('Тело запроса:', req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        console.log('Ошибка: отсутствуют обязательные поля');
        res.status(400).json({ message: 'Пожалуйста, заполните все поля' });
        return;
    }

    try {
        console.log('Проверка существующего пользователя...');
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            console.log('Ошибка: пользователь с таким email уже существует');
            res.status(400).json({ message: 'Пользователь с таким email уже существует' });
            return;
        }

        console.log('Хэширование пароля...');
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Пароль успешно захэширован');

        console.log('Создание нового пользователя...');
        const newUser = await createUser(username, email, hashedPassword);
        console.log('Пользователь создан:', newUser);

        res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: newUser });
    } catch (error) {
        console.error('Ошибка при регистрации пользователя:', error);
        res.status(500).json({ message: 'Ошибка сервера при регистрации' });
    }
});

// Обработчик для входа пользователя
router.post('/login', async (req, res) => {
    console.log('POST запрос на /login');
    const { email, password } = req.body;

    if (!email || !password) {
        console.log('Ошибка: отсутствуют обязательные поля');
        res.status(400).json({ message: 'Пожалуйста, заполните все поля' });
        return;
    }

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            console.log('Ошибка: пользователь не найден');
            res.status(401).json({ message: 'Неправильные учетные данные' });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Ошибка: неверный пароль');
            res.status(401).json({ message: 'Неправильные учетные данные' });
            return;
        }
        console.log(process.env.JWT_SECRET)

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log('Вход успешен, токен сгенерирован');
        res.status(200).json({ message: 'Вход успешен', token });
    } catch (error) {
        console.error('Ошибка при входе пользователя:', error);
        res.status(500).json({ message: 'Ошибка сервера при входе' });
    }
});

// Маршрут для получения профиля пользователя
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(400).json({ message: 'Не удалось идентифицировать пользователя' });
            return;
        }

        const user = await getUserById(userId);
        if (!user) {
            res.status(404).json({ message: 'Пользователь не найден' });
            return;
        }

        const { password, ...userData } = user;
        res.status(200).json(userData);
    } catch (error) {
        console.error('Ошибка при получении профиля пользователя:', error);
        res.status(500).json({ message: 'Ошибка сервера при получении профиля' });
    }
});

// Обновление профиля пользователя
router.put('/profile', authenticateToken, async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(400).json({ message: 'Не удалось идентифицировать пользователя' });
            return;
        }

        const { username, email } = req.body;

        if (!username && !email) {
            res.status(400).json({ message: 'Должно быть указано хотя бы одно поле для обновления' });
            return;
        }

        const updatedUser = await updateUserProfile(userId, { username, email });
        if (!updatedUser) {
            res.status(404).json({ message: 'Пользователь не найден' });
            return;
        }

        res.status(200).json({ message: 'Профиль пользователя успешно обновлен', user: updatedUser });
    } catch (error) {
        console.error('Ошибка при обновлении профиля пользователя:', error);
        res.status(500).json({ message: 'Ошибка сервера при обновлении профиля' });
    }
});

// Удаление профиля пользователя
router.delete('/profile', authenticateToken, async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(400).json({ message: 'Не удалось идентифицировать пользователя' });
            return;
        }

        const result = await deleteUserById(userId);
        if (result) {
            res.status(200).json({ message: 'Профиль пользователя успешно удален' });
        } else {
            res.status(404).json({ message: 'Пользователь не найден' });
        }
    } catch (error) {
        console.error('Ошибка при удалении профиля пользователя:', error);
        res.status(500).json({ message: 'Ошибка сервера при удалении профиля' });
    }
});

module.exports = router;
