import React from "react";

import './Landing.scss';
import {useDispatch} from 'react-redux';
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import {STARTED_QUIZ} from './actions/action-types';

export function Landing() {
    const dispatch = useDispatch();
    return (
        <main id="landing">
            <h1>Valentine's Day Quiz!!</h1>
            <h2>Answer the following quiz to get the Valentine's Day present your heart has always desired.</h2>
            <iframe src="https://giphy.com/embed/3oriO6qJiXajN0TyDu" width="350" height="350" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

            <footer>
                <IconButton aria-label="Get started" onClick={() => dispatch({type: STARTED_QUIZ, payload: 'question'})}>
                    <PlayArrow />
                </IconButton>
            </footer>
        </main>
    );
}