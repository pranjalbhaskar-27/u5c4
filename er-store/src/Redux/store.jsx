import todoReducers from "./reducer"
import { combineReducers, legacy_createStore } from "redux";
const reducer=combineReducers(
    {todoReducers}
)

export const store = legacy_createStore(reducer);
