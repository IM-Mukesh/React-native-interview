import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './Reducers';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// const rootReducer = combineReducers({
//   entry: counterReducer,
//   user: userReducer,
// });
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
