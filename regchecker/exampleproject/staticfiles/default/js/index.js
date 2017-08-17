
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'; 


const Index = () => (
	<div>Hello!</div>
)

ReactDOM.render(<Index />, document.getElementById('react-app'));