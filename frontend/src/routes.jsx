import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import DiscussionPage from './pages/DiscussionPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/lesson/:id" element={<LessonPage />} />
                <Route path="/discussion/:lessonId" element={<DiscussionPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
