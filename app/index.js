import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigator';
import { connect } from 'react-redux';

class Navigator extends React.Component {
    render () {
        return (
            <AppNavigator
                navigation={
                    addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.nav,
                    })
                }
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});
const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps, mapDispatchToProps)(Navigator);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}