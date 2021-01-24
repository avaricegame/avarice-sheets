import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import "normalize.css"
import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//import reportWebVitals from './reportWebVitals';
//reportWebVitals();
