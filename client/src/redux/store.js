import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./usersReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';
import regReducer from "./regReducer";
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  

export const store =  configureStore({
    reguser: regReducer,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);