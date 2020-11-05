import moodsActions from "./constants";

const initialState = {
    moods: [],
}

const moodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case moodsActions.SET_INITIAL_MOODS:
            return {
                ...state,
                moods: [
                    ...state.moods,
                    action.moods,
                ]
            }
        case moodsActions.ADD_MOOD:
            return {
                ...state,
                moods: [
                    ...state.moods,
                    action.mood
                ]
            }
        case moodsActions.RESET_MOODS:
            return {
                ...state,
                moods: []
            }
        case moodsActions.DELETE_MOOD:
            return {
                ...state,
                moods: state.moods.filter(mood => mood !== action.mood)
            }
        default:
            return state;
    }
}

export default moodsReducer;
