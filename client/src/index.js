import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

const rootElement = document.getElementById("root");
const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})
const store = createStore(
    allReducers,
    {
        products: [{name: 'iPhone'}],
        user:'user name'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
