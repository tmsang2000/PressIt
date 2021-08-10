import * as actionTypes from '@actions/actionTypes';
const initialState = {
  login: {
    success: false,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        login: {
            ...action.data,
            success: true
        },
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        login: {
          success: false,
        },
      };
    default:
      return state;
  }
};
