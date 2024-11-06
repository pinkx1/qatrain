import React from 'react';
import './Modal.css';

const LoginModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Вход</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Пароль" required />
                    <button type="submit" className="submit-button">Войти</button>
                </form>
                <p>Или войдите через</p>
                <div className="social-buttons">
                    <button className="social-button">Google</button>
                    <button className="social-button">GitHub</button>
                </div>
                <p>Нет аккаунта? <span className="link" onClick={onClose}>Зарегистрироваться</span></p>
                <button className="close-button" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default LoginModal;
