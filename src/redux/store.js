import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import filterReduce from "./filter/slice";
import contactsReducer from "./contacts/slice";
import authReducer from "./auth/slice";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReduce,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);