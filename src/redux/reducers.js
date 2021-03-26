import {combineReducers} from "redux";
import {CHANGE_QUIZ, INIT_QUIZZES, JUMP_QUIZ, QUESTION_ANSWER, SUBMIT} from "./actions";

function score(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            action.payload.quizzes.map((quiz) => {
                state = (quiz.answer === quiz.userAnswer) ? state + 1 : state;
            })
            return state;
        case INIT_QUIZZES:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return true;
        case INIT_QUIZZES:
            return false;
        default:
            return state;
    }
}

function currentQuiz(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUIZ:
            return state + action.payload.index;
        case JUMP_QUIZ:
            return action.payload.index;
        case INIT_QUIZZES:
            return 0;
        default:
            return state;
    }
}

function quizzes(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            return state.map((quiz, i) => {
                return {
                    ...quiz,
                    userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer
                }
            })
        case INIT_QUIZZES:
            return action.payload.quizzes;
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuiz,
    quizzes,
}));

export default GlobalState;