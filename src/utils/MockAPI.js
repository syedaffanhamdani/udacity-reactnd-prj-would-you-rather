import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./starter_data";

export function getUsers() {
    return _getUsers();
}

export function getQuestions() {
    return _getQuestions();
}

export function saveQuestion (info) {
    return _saveQuestion(info);
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info);
}