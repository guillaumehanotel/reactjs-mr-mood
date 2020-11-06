import userActions from "./constants";

const initialState = {
    user: {
        name: "Guigui"
    },
    isLogged: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActions.LOGIN:
            return {
                ...state,
                isLogged: true
            }
        case userActions.LOGOUT:
            return {
                ...state,
                isLogged: false
            }
        default:
            return state;
    }
}

export default userReducer;
