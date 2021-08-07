import * as actionTypes from './actionTypes';

const changeTheme = theme => {
  return {
    type: actionTypes.CHANGE_THEME,
    theme,
  };
};

const changeFont = font => {
  return {
    type: actionTypes.CHANGE_FONT,
    font,
  };
};

const forceTheme = force_dark => {
  return {
    type: actionTypes.FORCE_APPEARANCE,
    force_dark,
  };
};

const changeLanguge = language => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language,
  };
};

const showLoading = () => {
  return { type: actionTypes.SHOW_LOADING };
};

const hideLoading = () => {
  return { type: actionTypes.HIDE_LOADING };
};

const showPopupNotification = (content, status, onPress) => {
  return { 
    type: actionTypes.SHOW_POPUP_NOTIFICATION,
    content,
    status,
    onPress
  };
};

const hidePopupNotification = (id) => {
  return { 
    type: actionTypes.HIDE_POPUP_NOTIFICATION,
    id: id
   };
};

export const onChangeTheme = theme => dispatch => {
  dispatch(changeTheme(theme));
};

export const onForceTheme = mode => dispatch => {
  dispatch(forceTheme(mode));
};

export const onChangeFont = font => dispatch => {
  dispatch(changeFont(font));
};

export const onChangeLanguage = language => dispatch => {
  dispatch(changeLanguge(language));
};

export const onShowLoading = () => dispatch => {
  dispatch(showLoading());
};

export const onHideLoading = () => dispatch => {
  dispatch(hideLoading());
};

export const onShowPopupNotification = (content, status = null, onPress = () => {}) => dispatch => {
  dispatch(showPopupNotification(content, status, onPress));
};

export const onHidePopupNotification = (id) => dispatch => {
  dispatch(hidePopupNotification(id));
};
