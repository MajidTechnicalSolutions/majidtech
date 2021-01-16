// import types
import { GET_ERRORS } from '../actions/types';
const isEmpty = require('is-empty');
// Initial state
const initialState = {};

// Authentication Reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
