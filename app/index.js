import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { StyleProvider } from 'native-base';

const customTheme = {

}

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
