import * as types from "../constants/questions";
import { getUsers } from "./users";
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../API/_DATA";

const getQuestionsRequest = (promise) => {
  return {
    type: types.GET_QUESTIONS_REQUEST,
    payload: promise,
  };
};

const getQuestionsFailed = (error) => {
  return {
    type: types.GET_QUESTIONS_FAILED,
    payload: error,
  };
};

const getQuestionsSuccess = (questions) => {
  return {
    type: types.GET_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const getQuestions = () => {
  return (dispatch) => {
    const promise = _getQuestions();
    dispatch(getQuestionsRequest(promise));
    promise
      .then((questions) => {
        dispatch(getQuestionsSuccess(questions));
      })
      .catch((error) => {
        dispatch(getQuestionsFailed(error));
      });
    return promise;
  };
};

const saveQuestionRequest = (promise) => {
  return {
    type: types.SAVE_ANSWER_REQUEST,
    payload: promise,
  };
};

const saveQuestionFailed = (error) => {
  return {
    type: types.SAVE_ANSWER_REQUEST,
    payload: error,
  };
};

const saveQuestionSuccess = (question) => {
  return {
    type: types.SAVE_QUESTION_SUCCESS,
    payload: question,
  };
};

const saveUserQuestion = (question) => {
  return {
    type: types.SAVE_USER_QUESTION_SUCCESS,
    payload: question,
  };
};

export const saveQuestion = (question) => {
  return (dispatch) => {
    const promise = _saveQuestion(question);
    dispatch(saveQuestionRequest(promise));
    promise
      .then((question) => {
        dispatch(saveQuestionSuccess(question));
        dispatch(saveUserQuestion(question));
      })
      .catch((error) => {
        dispatch(saveQuestionFailed(error));
      });
    return promise;
  };
};

const saveAnswerRequest = (promise) => {
  return {
    type: types.SAVE_ANSWER_REQUEST,
    payload: promise,
  };
};

const saveAnswerFailed = (error) => {
  return {
    type: types.SAVE_ANSWER_FAILED,
    payload: error,
  };
};

const saveAnswerSuccess = (answer) => {
  return {
    type: types.SAVE_ANSWER_SUCCESS,
    payload: answer,
  };
};

export const saveAnswer = (answer) => {
  return (dispatch) => {
    const promise = _saveAnswerRequest(answer);
    dispatch(saveAnswerRequest(promise));
    promise
      .then((questions) => {
        dispatch(saveAnswerSuccess(questions));
        getQuestions()(dispatch);
        getUsers()(dispatch);
      })
      .catch((error) => {
        dispatch(saveAnswerFailed(error));
      });
    return promise;
  };
};
