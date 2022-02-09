import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER 
} from 'redux-persist';

import contactsReducer from './reducer';

 const store = configureStore({
   reducer: {
     contacts: contactsReducer,
   },

    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
 })

export default store;

