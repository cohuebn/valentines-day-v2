import React from 'react';
import ReactDOM from "react-dom/client";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './reducers/root-reducer';
import {nameQuestion} from './datasets/questions';

const initialStore = {
    quiz: {
        started: false,
        currentQuestion: {...nameQuestion},
        currentQuestionKey: 'name',
        selectedChoice: null,
        answers: {}
    }
};
const store = createStore(rootReducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App></App>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
