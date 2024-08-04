import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer  from './user/userSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
} 

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store;

export const persistor = persistStore(store);

