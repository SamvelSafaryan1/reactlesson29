import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import usersReducer from "./reducers/usersReducer"

const rootReducers = combineReducers({
    usersPage: usersReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store
