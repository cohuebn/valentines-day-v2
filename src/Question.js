import React from "react";

import {useSelector, useDispatch} from 'react-redux';
import {CHOICE_SELECTED, QUESTION_ANSWERED} from './actions/action-types';
import {Button, IconButton} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import './Question.scss';

export function Question() {
    const quiz = useSelector(state => state.quiz);

    const isSelected = choice => quiz.selectedChoice == choice;
    const dispatch = useDispatch();
    const setSelected = choice => dispatch({type: CHOICE_SELECTED, payload: choice});
    const answerQuestion = () => dispatch({type: QUESTION_ANSWERED});

    const choiceElements = Object.keys(quiz.currentQuestion.choices).map(choice => {
        return (
            <Button variant="outlined" value={choice} key={choice} onClick={() => setSelected(choice)} className={isSelected(choice)? 'selected' : ''}>
                {choice}
            </Button>
        );
    });
    return (
        <main id="question">
            <h1>{quiz.currentQuestion.question}</h1>
            <div id="choices">
                {choiceElements}
            </div>
            <footer>
                <IconButton aria-label="Submit answer" onClick={() => answerQuestion()}>
                    <PlayArrow />
                </IconButton>
            </footer>
        </main>
    )
}