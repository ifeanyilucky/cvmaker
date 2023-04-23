import * as types from './actionType';

export default function AppReducer(state, action) {
  switch (action.type) {
    case types.createResume:
      return { ...state, resume: [action.payload, ...state.resume] };
    default:
      return state;
  }
}
