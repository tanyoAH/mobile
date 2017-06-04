import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { StyleProvider, getTheme} from 'native-base';
import tanyoTheme from './themes/tanyoTheme';

export default class App extends React.Component {

    render() {
        return (
            <StyleProvider style={getTheme(tanyoTheme)}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </StyleProvider>
        );
    }
}

