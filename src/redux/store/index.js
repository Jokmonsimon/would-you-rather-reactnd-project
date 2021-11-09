import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "../middleware/logger";
import rootReducer from "../reducers";

const configureStore = (preloadedState) => {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);
  const enhancers = [middlewareEnhancer];
  const composeEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composeEnhancers);
  return store;
};

export default configureStore;
