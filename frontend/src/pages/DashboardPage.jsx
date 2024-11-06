import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Добро пожаловать, Анна!</h1>
                <div className="progress-bar-container">
                    <span>Уровень: Продвинутый</span>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <span className="progress-percent">75% завершено</span>
                </div>
            </header>

            <main className="dashboard-main">
                <div className="course-progress">
                    <div className="course-card">
                        <h2>Ручное тестирование</h2>
                        <div className="course-progress-bar">
                            <div className="course-progress-fill" style={{ width: '60%' }}></div>
                        </div>
                        <span>Прогресс: 60%</span>
                        <button className="continue-button">Продолжить обучение</button>
                    </div>

                    <div className="course-card">
                        <h2>Автоматизация</h2>
                        <div className="course-progress-bar">
                            <div className="course-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                        <span>Прогресс: 40%</span>
                        <button className="continue-button">Продолжить обучение</button>
                    </div>
                </div>

                <aside className="achievements-section">
                    <h3>Мои достижения</h3>
                    <ul>
                        <li>🏆 Первые 10 тестов</li>
                        <li>💻 Автоматизатор новичок</li>
                        <li>📅 30 дней подряд</li>
                    </ul>
                </aside>
            </main>

            <footer className="daily-challenge">
                <h3>Ежедневный вызов</h3>
                <p>Пройдите 3 урока по автоматизации тестирования сегодня</p>
                <button className="accept-challenge-button">Принять вызов</button>
            </footer>
        </div>
    );
};

export default DashboardPage;
