
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'; 

import rootReducer from './reducers';
import Root from './containers/root';

const store = createStore(rootReducer);

const Index = () => (
    <Provider store={store}>
        <div><Root /></div>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('react-app'));