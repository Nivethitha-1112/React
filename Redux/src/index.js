import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'; //creating a store
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {}, //The reducer argument specifies how the 
  //application's state is updated in response to actions
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider> 
  </React.StrictMode>
);

//<Provider> wraps the <App /> component. 
//This provides the Redux store to all components in the application. 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
