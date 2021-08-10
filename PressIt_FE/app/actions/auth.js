import * as actionTypes from './actionTypes';

export const login = (data) => {
    return {
      type: actionTypes.LOGIN,
      data,
    };
};

const logOut = () => {
    return {
      type: actionTypes.LOGOUT,
    };
};

export const onLogin = account => dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = {
                token: 'TEST',
            };
            await dispatch(login(data));
            resolve({data: data, success: true});
        } catch (err) {
            reject({data: err, success: false})
        }
    })
}

export const onLogOut = () => dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            await dispatch(logOut());
            resolve({data: {}, success: true});
        } catch (err) {
            reject({data: err, success: false})
        }
    })
}