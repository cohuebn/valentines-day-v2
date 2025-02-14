import React from "react";

import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useInterval} from './useInterval';
import './Question.scss';
import { theEnd } from './datasets/results';

function getAnswerDisplay(quiz, answerIndex) {
    const results = quiz.results.results;
    const possibleAnswers = Object.keys(results);
    const isTheEnd = answerIndex >= possibleAnswers.length;
    if (isTheEnd) {
        return {
            isTheEnd,
            url: theEnd.url,
            answerText: "That's the card. That's it. I hope you love it. Bye...",
            timeRequired: null
        }
    }

    const answer = possibleAnswers[answerIndex];
    return {
        isTheEnd,
        answerText: `It's got ${answer.toLowerCase()}:`,
        url: results[answer].url,
        timeRequired: results[answer].timeRequired || 6000
    }
}

export function Result() {
    const quiz = useSelector(state => state.quiz);
    const [answerState, setAnswerState] = useState({answerIndex: 0, answerDisplay: getAnswerDisplay(quiz, 0)});
    useInterval(() => {
        const answerIndex = answerState.answerIndex + 1;
        setAnswerState({answerIndex, answerDisplay: getAnswerDisplay(quiz, answerIndex)});
    }, answerState.answerDisplay.timeRequired);

    return (
        <main id="question">
            <h1>Happy Valentine's Day {quiz.results.name}! We love you! Here's the card of your dreams.</h1>
            <h1>{answerState.answerDisplay.answerText}</h1>
            <iframe src={answerState.answerDisplay.url} width="480" height="460" frameBorder="0" className="giphy-embed" allowFullScreen allow="autoplay"></iframe>
            <p><a href="https://giphy.com/">via GIPHY</a> and <a href="https://youtube.com">YouTube</a></p>
        </main>
    )
}