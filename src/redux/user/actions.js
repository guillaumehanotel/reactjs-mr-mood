import userActions from "./constants";


export function login() {
    return async function (dispatch) {
        dispatch({
            type: userActions.LOGIN,
        })
    }
}

export function logout() {
    return async function (dispatch) {
        dispatch({
            type: userActions.LOGOUT,
        })
    }
}
