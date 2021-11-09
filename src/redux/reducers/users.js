import * as types from "../constants/users";
import { SAVE_USER_QUESTION_SUCCESS } from "../constants/questions";

const initialState = {
  loading: false,
  create_account: false,
  error: null,
  users: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case SAVE_USER_QUESTION_SUCCESS:
      const { author } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [author]: {
            ...state.users[author],
            questions: [
              ...state.users[author].questions,
              ...[action.payload.id],
            ],
          },
        },
      };

    case types.ADD_USER_REQUEST:
      return {
        ...state,
        create_account: true,
      };

    case types.ADD_USER_FAILED:
      return {
        ...state,
        create_account: false,
        error: action.payload,
      };

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        create_account: false,
        users: {
          ...state.users,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default usersReducer;
