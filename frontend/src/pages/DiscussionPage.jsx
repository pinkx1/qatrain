import React from 'react';
import './DiscussionPage.css';

const DiscussionPage = () => {
    return (
        <div className="discussion-page">
            <header className="discussion-header">
                <h1>Введение в машинное обучение</h1>
                <button className="back-button">← Назад к уроку</button>
            </header>

            <section className="comment-section">
                <textarea placeholder="Добавьте ваш комментарий..."></textarea>
                <button className="submit-button">Отправить</button>
            </section>

            <section className="comments-list">
                <div className="comment">
                    <img src="/path/to/user-avatar.png" alt="User avatar" className="avatar" />
                    <div className="comment-content">
                        <p><strong>Анна Смирнова</strong></p>
                        <p>Отличный урок! У меня есть вопрос по применению алгоритма k-средних в реальных проектах. Кто-нибудь может поделиться опытом?</p>
                        <span className="comment-time">2 часа назад</span>
                        <div className="comment-actions">
                            <button className="reply-button">Ответить</button>
                            <button className="vote-button">Голосовать (5)</button>
                        </div>
                    </div>
                </div>

                <div className="comment">
                    <img src="/path/to/user-avatar.png" alt="User avatar" className="avatar" />
                    <div className="comment-content">
                        <p><strong>Иван Петров</strong></p>
                        <p>Можете ли вы объяснить разницу между контролируемым и неконтролируемым обучением более подробно?</p>
                        <span className="comment-time">Вчера</span>
                        <div className="comment-actions">
                            <button className="reply-button">Ответить</button>
                            <button className="vote-button">Голосовать (3)</button>
                        </div>
                    </div>
                </div>
            </section>

            <aside className="popular-questions">
                <h3>Популярные вопросы</h3>
                <ul>
                    <li>Как выбрать правильную модель для задачи классификации?</li>
                    <li>Оптимизация гиперпараметров: лучшие практики</li>
                    <li>Проблемы с переобучением: как их избежать?</li>
                </ul>
            </aside>

            <footer className="discussion-footer">
                <p>© 2025 Testify. Все права защищены.</p>
            </footer>
        </div>
    );
};

export default DiscussionPage;
