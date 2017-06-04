import { NativeRouter, Route, Switch } from 'react-router-native';
import MyProfileScreen from './screens/MyProfile';
import NotificationsScreen from './screens/Notifications';
import TripsScreen from './screens/Trips';
import TripsCreatorScreen from './screens/TripsCreator';
import TripScreen from './screens/Trip/index';
import ActivityScreen from './screens/Activity/index';
import React from 'react';
import { addNotification } from './actions/trips';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { WS_URL } from './constants';

class Routes extends React.Component {

    componentDidMount() {
        const ws = new WebSocket(WS_URL);
        ws.onmessage = (e) => {
            console.log(e);
        }
    }

    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={TripsScreen}
                    />
                    <Route
                        exact
                        path="/myprofile"
                        component={MyProfileScreen}
                    />
                    <Route
                        exact
                        path="/notifications"
                        component={NotificationsScreen}
                    />
                    <Route
                        exact
                        path="/tripsCreator"
                        component={TripsCreatorScreen}
                    />
                    <Route
                        path="/trips/:tripId"
                        component={TripScreen}
                    />
                    <Route
                        path="/activities/:activityId"
                        component={ActivityScreen}
                    />
                </Switch>
            </NativeRouter>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        addNotification,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(Routes);
