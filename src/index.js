import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import configureStore from './redux/configureStore';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
// import i18n (needs to be bundled ;)) 
import i18n from './i18n';


const store = configureStore();
const history = createBrowserHistory(store);


if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </Router>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
