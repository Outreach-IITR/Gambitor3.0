import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; 
import userReducer from './user/userSlice.js';
import signUpReducer from './user/signUpSlice.js'

// Combine all your reducers
const rootReducer = combineReducers({ user: userReducer , signUp : signUpReducer });
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();
//import immutableTransform from 'redux-persist-transform-immutable'

// const persistConfig = {
//   transforms: [immutableTransform()],
//   key: 'root',
//   storage
// }
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
