import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './redux/store.js'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {AuthProvider} from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </AuthProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
