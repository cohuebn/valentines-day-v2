import React from "react";

import { useSelector } from 'react-redux';
import './App.scss';
import { Landing } from './Landing';
import { Question } from './Question';
import { Result } from './Result';

export default function App() {
    const quiz = useSelector(state => state.quiz);
    const getCurrentPage = () => {
        if (!quiz.started)
            return <Landing></Landing>;
        if (!quiz.currentQuestion)
            return <Result></Result>;
        return <Question></Question>;
    }

    return (
        <div className="app">
            {getCurrentPage()}
        </div>
    );
}