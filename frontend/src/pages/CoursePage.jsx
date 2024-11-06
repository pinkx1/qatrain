import React from 'react';
import './CoursePage.css';

const CoursePage = () => {
    return (
        <div className="course-page">
            <header className="course-header">
                <h1>Ручное тестирование</h1>
                <p>Освойте основы ручного тестирования и станьте профессиональным QA-специалистом</p>
            </header>

            <section className="course-progress-section">
                <h2>Общий прогресс курса</h2>
                <div className="overall-progress-bar">
                    <div className="overall-progress-fill" style={{ width: '45%' }}></div>
                </div>
                <span>45% завершено</span>
            </section>

            <main className="lessons-section">
                <h2>Уроки</h2>
                <ul className="lessons-list">
                    <li className="lesson-item">
                        <span>1. Введение в ручное тестирование</span>
                        <div className="lesson-progress-bar">
                            <div className="lesson-progress-fill" style={{ width: '100%' }}></div>
                        </div>
                        <button className="lesson-button completed">Завершено</button>
                    </li>
                    <li className="lesson-item">
                        <span>2. Техники тестирования</span>
                        <div className="lesson-progress-bar">
                            <div className="lesson-progress-fill" style={{ width: '50%' }}></div>
                        </div>
                        <button className="lesson-button in-progress">Продолжить</button>
                    </li>
                    <li className="lesson-item">
                        <span>3. Тест-кейсы и чек-листы</span>
                        <div className="lesson-progress-bar"></div>
                        <button className="lesson-button">Начать</button>
                    </li>
                    <li className="lesson-item">
                        <span>4. Отчеты о дефектах</span>
                        <div className="lesson-progress-bar"></div>
                        <button className="lesson-button disabled" disabled>Недоступно</button>
                    </li>
                </ul>
            </main>

            <aside className="achievements-section">
                <h3>Мои достижения</h3>
                <ul className="achievements-list">
                    <li>🥇 Первый урок</li>
                    <li>🐞 Нашел баг</li>
                    <li>📋 5 тест-кейсов</li>
                    <li className="locked">🔒 Недоступно</li>
                    <li className="locked">🔒 Недоступно</li>
                    <li className="locked">🔒 Недоступно</li>
                </ul>
            </aside>

            <footer className="course-footer">
                <p>© 2025 Testify. Все права защищены.</p>
            </footer>
        </div>
    );
};

export default CoursePage;
