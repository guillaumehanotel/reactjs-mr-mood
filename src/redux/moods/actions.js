import moodsActions from "./constants";

export function setInitialMoods() {
    const moods = [{
        id: 1,
        mood: 5,
        title: "Parfait"
    }];
    return async function (dispatch) {
        dispatch({
            type: moodsActions.SET_INITIAL_MOODS,
            moods: moods,
        })
    }
}

export function storeMood(mood_type) {
    return async function (dispatch) {
        const mood = {
            id: Math.floor(Math.random() * 999),
            title: mood_type.title,
            mood: mood_type.mood,
            color: mood_type.color,
        }
        dispatch({
            type: moodsActions.ADD_MOOD,
            mood: mood
        })
    }
}

export function deleteMood(mood) {
    return async function (dispatch) {
        dispatch({
            type: moodsActions.DELETE_MOOD,
            mood: mood
        })
    }
}

export function resetMoods() {
    return async function (dispatch) {
        dispatch({
            type: moodsActions.RESET_MOODS
        })
    }
}
