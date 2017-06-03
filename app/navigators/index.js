import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MyProfileScreen from '../screens/MyProfile';
import TripsScreen from '../screens/Trips';

export const AppNavigator = StackNavigator({
    Trips: {
        screen: TripsScreen,
    },
    MyProfile: {
        screen: MyProfileScreen,
    },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);