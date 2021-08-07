import * as actionTypes from '@actions/actionTypes';

const initialState = {
  data: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SHOW_POPUP_NOTIFICATION:
      return {
        ...state,
        data: [...state.data, {
          id: state.data.length + 1,
          content: action.content,
          status: action.status,
          onPress: action.onPress
        }]
      };
    case actionTypes.HIDE_POPUP_NOTIFICATION:
      return {
        ...state,
        data: state.data.filter(i => i.id != action.id)
      };
    default:
      return state;
  }
};
