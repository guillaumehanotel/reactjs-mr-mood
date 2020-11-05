import {applyMiddleware, createStore} from "redux";
import {persistCombineReducers} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import moods from "@redux/moods/reducer"

const reducers = {
    moods,
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(
    persistCombineReducers(persistConfig, reducers),
    composeWithDevTools(applyMiddleware(thunk))
)
