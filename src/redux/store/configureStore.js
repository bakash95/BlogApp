import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer'

import thunk from 'redux-thunk';

import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    blacklist: ['posts'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = preloadedState => {
    return createStore(
        persistedReducer,
        preloadedState,
        applyMiddleware(thunk),
    )
}

export default configureStore;