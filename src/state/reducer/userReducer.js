import { ACTION_GET, ACTION_GET_SUCCESS, ACTION_GET_ERROR } from '../actions';

const initialState = {
  data: [],
  dropdownProducts: [],
  // loadingUser: false,
  isFetching: false,
  error: '',
  // message: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case ACTION_GET_SUCCESS:
      return {
        ...state,
        dropdownProducts: action.payload,
        isFetching: false,
        error: '',
      };
    case ACTION_GET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
