// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  store  from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <App />
      {/* </PersistGate> */}
   </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
