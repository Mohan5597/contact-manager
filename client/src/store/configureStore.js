import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import contactsReducer from '../reducers/contact'

const configureStore=() =>{
    const store=createStore(combineReducers({
        user:userReducer,
        contacts:contactsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore