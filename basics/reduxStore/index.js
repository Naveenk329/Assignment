import { createLogger } from 'redux-logger'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rooReducer from '../reducers'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger())
}

const Store = createStore(
    rooReducer,
    applyMiddleware(...middleware)
);
export default Store