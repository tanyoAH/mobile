import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigator';
import { Container } from 'native-base';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <AppNavigator />
                </Container>
            </Provider>
        );
    }
}