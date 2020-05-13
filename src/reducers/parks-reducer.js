import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  parks: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PARKS:
      return Object.assign({}, state, {
        isLoading: true
      });
      default:
        return state;
  }
};