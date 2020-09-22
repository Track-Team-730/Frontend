import { ACTION_GET, ACTION_GET_SUCCESS, ACTION_GET_ERROR } from '../actions';

const initialState = {
  data: [],
  loadingUser: false,
  error: '',
  message: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET:
      return {};
    case ACTION_GET_SUCCESS:
      return {};
    case ACTION_GET_ERROR:
      return {};
    default:
      return state;
  }
};

export default userReducer;
