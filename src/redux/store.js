import { reduceContacts } from './reduce/reduceContacts';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loger } from "redux-logger";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import reduceAuth from './Auth/reduceAuth';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, reduceAuth),
        contact: reduceContacts,

    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);