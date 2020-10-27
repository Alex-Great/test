import * as types from '../constants';

const initialState = {
	error: ''
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
      	...state,
      	error: action.data
      };
    default:
      return state;
  }
}