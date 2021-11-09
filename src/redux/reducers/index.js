import { combineReducers } from "redux";
import loginReducer from "./login";
import usersReducer from "./users";
import questionsReducer from "./questions.js";

const rootReducer = combineReducers({
  authUser: loginReducer,
  users: usersReducer,
  questions: questionsReducer,
});

export default rootReducer;
