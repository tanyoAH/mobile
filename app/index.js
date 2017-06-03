import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigators';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}