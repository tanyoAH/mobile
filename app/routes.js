import { NativeRouter, Route, Switch } from 'react-router-native';
import MyProfileScreen from './screens/MyProfile';
import NotificationsScreen from './screens/Notifications';
import TripsScreen from './screens/Trips';
import TripsCreatorScreen from './screens/TripsCreator';
import React from 'react';

export default () => (
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
      </Switch>
  </NativeRouter>
);