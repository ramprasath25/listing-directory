/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-snapshot';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import axios from 'axios';
import listDetailsReducer from './containers/ListingDetailsPage/reducer';
import listReducer from './containers/ListPage/reducer';
import homepageReducer from './containers/HomePage/reducer';
import intialReducer from './containers/App/reducer';
import { loadIntialData } from './containers/App/actions';
// Import root app
import App from 'containers/App';
// Combine all Reducers
const allCombinedReducer = combineReducers({
  list: listReducer,
  listDetails: listDetailsReducer,
  popularList: homepageReducer,
  intialList: intialReducer,
  router: connectRouter(history)
});
// Create Store
const store = createStore(allCombinedReducer, applyMiddleware(thunk, promise));
const intialLoad = new Promise((resolve, reject) => {
  axios.get('https://ipapi.co/json/').then(response => {
    resolve(response.data);
  });
})
intialLoad.then((data) => {
  store.dispatch(loadIntialData(data))
})
// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import 'styles/theme.scss';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
const initialState = {};
// const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const renderTemplate = () => {
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      MOUNT_NODE
    )
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    renderTemplate();
  });
}

renderTemplate();
