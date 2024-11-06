import React from 'react';
import './LessonPage.css';

const LessonPage = () => {
    return (
        <div className="lesson-page">
            <header className="lesson-header">
                <h1>Тест-кейсы в тестировании</h1>
                <div className="lesson-progress">
                    <span>Прогресс: 60%</span>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: '60%' }}></div>
                    </div>
                </div>
            </header>

            <section className="lesson-content">
                <h2>Введение в тест-кейсы</h2>
                <p>
                    Тест-кейсы являются основой процесса тестирования программного обеспечения. Они представляют собой набор условий или переменных, при которых тестирование определяет, удовлетворяет ли система или программный компонент требованиям.
                </p>
                <div className="image-placeholder">Схема структуры тест-кейса</div>

                <h2>Компоненты тест-кейса</h2>
                <ul>
                    <li>Идентификатор тест-кейса</li>
                    <li>Название тест-кейса</li>
                    <li>Описание</li>
                    <li>Предусловия</li>
                    <li>Шаги выполнения</li>
                    <li>Ожидаемый результат</li>
                    <li>Фактический результат</li>
                    <li>Статус (Пройден/Не пройден)</li>
                </ul>
                <div className="image-placeholder">Пример заполненного тест-кейса</div>

                <h2>Важность тест-кейсов</h2>
                <p>
                    Тест-кейсы играют критическую роль в обеспечении качества программного обеспечения. Они позволяют:
                </p>
                <ul>
                    <li>Систематизировать процесс тестирования</li>
                    <li>Обеспечить полное покрытие функциональности</li>
                    <li>Создать базу знаний для будущего регрессионного тестирования</li>
                    <li>Облегчить коммуникацию между членами команды</li>
                </ul>
            </section>

            <footer className="lesson-footer">
                <button className="next-button">Продолжить к тесту</button>
                <p>Завершите урок, чтобы получить звание "Мастер тест-кейсов"</p>
            </footer>
        </div>
    );
};

export default LessonPage;
