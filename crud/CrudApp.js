import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './components/index';

import Store from './store'; //Import the store
 //Import the component file

export default class CrudApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router/>
            </Provider>
        );
    }
}