import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { Container } from 'native-base';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Routes />
                </Container>
            </Provider>
        );
    }
}
