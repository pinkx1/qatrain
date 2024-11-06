import React from 'react';
import './Modal.css';

const RegistrationModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Регистрация</h2>
                <form>
                    <input type="text" placeholder="Имя" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Пароль" required />
                    <button type="submit" className="submit-button">Зарегистрироваться</button>
                </form>
                <p>Или зарегистрируйтесь через</p>
                <div className="social-buttons">
                    <button className="social-button">Google</button>
                    <button className="social-button">GitHub</button>
                </div>
                <p>Уже есть аккаунт? <span className="link" onClick={onClose}>Войти</span></p>
                <button className="close-button" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default RegistrationModal;
