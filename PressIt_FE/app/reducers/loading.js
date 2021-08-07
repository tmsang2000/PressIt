import * as actionTypes from '@actions/actionTypes';

const initialState = {
    visible: false
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case actionTypes.SHOW_LOADING:
        return {
            ...initialState,
            visible: true
        };
      case actionTypes.HIDE_LOADING:
        return { ...initialState }
      default:
        return { ...initialState }
    }
  };