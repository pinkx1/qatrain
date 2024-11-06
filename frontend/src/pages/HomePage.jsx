import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import LoginModal from '../components/LoginModal';
import './HomePage.css';

const HomePage = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <div className="homepage">
            <header className="homepage-header">
                <div className="header-top">
                    <div className="logo">Testify</div>
                    <div className="auth-buttons">
                        <button onClick={() => setShowLoginModal(true)} className="button login-button">Вход</button>
                        <button onClick={() => setShowRegistrationModal(true)} className="button register-button">Регистрация</button>
                    </div>
                </div>
                <h1>Стань экспертом в тестировании с Testify</h1>
                <p>Освойте современные методы тестирования и получите востребованную профессию</p>
                <button className="start-button">Начать обучение</button>
            </header>
            {showRegistrationModal && <RegistrationModal onClose={() => setShowRegistrationModal(false)} />}
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </div>
    );
};

export default HomePage;
