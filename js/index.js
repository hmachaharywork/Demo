'use strict';

import React, {Component} from 'React';
import App from './routes/drawerNavigation';
import { FoodTabs } from './routes/tavNavigation';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';


class Root extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App store={this.state.store} />
            </Provider>
        );
    }
}

export default Root;
