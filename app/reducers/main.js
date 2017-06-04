import { fromJS } from 'immutable';
import {
    SET_TRIPS,
    SET_CONFIRMED_ACTIVITIES,
    SET_ACTIVITY_ID,
    SET_TRIP_ID,
    SET_TRIPS_LOADING,
    REMOVE_NOTIFICATION,
    ADD_NOTIFICATION,
    SET_USER_ID,
} from '../actions/trips';

const initialState = fromJS({
    trips: [],
    confirmedActivities: [],
    tripId: null,
    activityId: null,
    tripsLoading: false,
    notifications: [],
    userId: null,
});

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_ID:
            return state.set('userId', action.userId);
        case REMOVE_NOTIFICATION:
            return state.removeIn(['notifications', state.get('notifications').findIndex((notif) => notif.get('id') === action.id)])
        case ADD_NOTIFICATION:
            return state.update('notifications', (notif) =>
                notif.push(fromJS(action.notification)),
            );
        case SET_TRIPS_LOADING:
            return state.set('tripsLoading', action.loading);
        case SET_ACTIVITY_ID:
            return state.set('activityId', action.activityId);
        case SET_TRIP_ID:
            return state.set('tripId', action.tripId);
        case SET_CONFIRMED_ACTIVITIES:
            return state.set('confirmedActivities', fromJS(action.activities));
        case SET_TRIPS:
            return state.set('trips', fromJS(action.trips));
        default:
            return state;
    }
}