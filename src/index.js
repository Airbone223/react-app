
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import SocialNetworkMain from "./SocialNetwork/SocialNetworkMain";
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
import Store from './/SocialNetwork/Redux/redux-store' 
import {Provider} from 'react-redux'

ReactDOM.render(

    <BrowserRouter>
    <React.StrictMode>
<Provider store = {Store}>

      <SocialNetworkMain />  </Provider>
    </React.StrictMode> </BrowserRouter>,
    document.getElementById("root")
  );
  window.store = Store

serviceWorker.unregister();
