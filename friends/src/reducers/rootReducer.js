import { FETCHED, FETCHING, ERROR, DELETE_FRIEND, SUCCESS } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  error: null,
  lizFavMovie: 'Running with Scissors'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED:
      return { ...state, chars: action.chars, fetching: false, error: null };
    case DELETE_FRIEND:
      return {...state, fetching: false, error: null };
    default:
      return state;
  }
};
