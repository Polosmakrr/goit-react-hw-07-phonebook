import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './reducer';


// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist:["filter"],
// };

 const store = configureStore({
   reducer: {
    //  contacts: persistReducer(contactsPersistConfig, contactsReducer),
     contacts: contactsReducer,
   },

    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
 })


// const persistor = persistStore(store)
 

// export default { store, persistor };

export default store;

