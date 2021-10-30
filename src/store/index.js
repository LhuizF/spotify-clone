import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './Auth/reducer';
import user from './User/reducer';

const persistConfig = {
    key: 'auth',
    storage
};

const RootReducer = combineReducers({ auth, user });

const persistedReducers = persistReducer(persistConfig, RootReducer);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

export { store, persistor };
