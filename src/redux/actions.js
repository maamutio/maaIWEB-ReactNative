export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUIZ = 'CHANGE_QUIZ';
export const SUBMIT = 'SUBMIT';
export const INIT_QUIZZES = 'INIT_QUIZZES';
export const JUMP_QUIZ = 'JUMP_QUIZ';

export function questionAnswer(index, answer) {
    return {type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeQuiz(index, nQuestions) {
    return {type: CHANGE_QUIZ, payload: {index, nQuestions}};
}

export function submit(quizzes) {
    return {type: SUBMIT, payload: {quizzes}};
}

export function initQuizzes(quizzes) {
    return {type: INIT_QUIZZES, payload: {quizzes}};
}

export function jumpQuiz(index) {
    return {type: JUMP_QUIZ, payload: {index}};
}