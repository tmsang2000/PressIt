import * as actionTypes from '@actions/actionTypes';
const initialState = {
  theme: null,
  font: null,
  force_dark: null,
  language: null,
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case actionTypes.CHANGE_FONT:
      return {
        ...state,
        font: action.font,
      };
    case actionTypes.FORCE_APPEARANCE:
      return {
        ...state,
        force_dark: action.force_dark,
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case actionTypes.SHOW_LOADING:
      return {
          ...state,
          loading: true
      };
    case actionTypes.HIDE_LOADING:
      return { 
        ...state,
        loading: false 
      }
    default:
      return state;
  }
};
