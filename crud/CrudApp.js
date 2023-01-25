import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './components';

import store from './store'; //Import the store
 //Import the component file

export default class CrudApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}