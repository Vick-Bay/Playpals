import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
} from 'redux-persist'

import authReducer from './authSlice'
import gameReducer from './gameSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
})

const persistedReducers = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
    })
  },
})

export const persistor = persistStore(store)

export default store
