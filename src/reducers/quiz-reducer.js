import {STARTED_QUIZ, CHOICE_SELECTED, QUESTION_ANSWERED} from '../actions/action-types';
import { questions } from '../datasets/questions';
import { results } from '../datasets/results';

function calculateResults(answers) {
    const name = answers.name;
    const calculatedResult = Object.values(answers).reduce((currentResults, answer) => {
        return results[answer] ? {...currentResults, [answer]: results[answer]} : currentResults;
    }, {});
    return {
        name,
        results: calculatedResult
    };
}

export const quizReducer = (state, action) => {
    switch (action.type) {
        case STARTED_QUIZ: return { ...state, started: true }
        case CHOICE_SELECTED: return { ...state, selectedChoice: action.payload }
        case QUESTION_ANSWERED: {
            const choice = state.selectedChoice;
            const answers = { ...state.answers, [state.currentQuestionKey]: choice}
            const choiceMetadata = state.currentQuestion.choices[choice];
            const nextQuestionKey = choiceMetadata.nextQuestion || state.currentQuestion.nextQuestion;
            const nextQuestion = nextQuestionKey ? questions[nextQuestionKey] : null
            const results = !nextQuestion ? calculateResults(answers) : null;
            return {...state, currentQuestion: nextQuestion, currentQuestionKey: nextQuestionKey, answers, results};
        }
        default:
            return state || null;
    }
};