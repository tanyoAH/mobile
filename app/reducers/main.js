import { fromJS } from 'immutable';
import {
    SET_TRIPS,
    SET_CONFIRMED_ACTIVITIES,
    SET_ACTIVITY_ID,
    SET_TRIP_ID,
} from '../actions/trips';

const initialState = fromJS({
    tripTab: 'itinerary', // or activities
    trips: [],
    confirmedActivities: [],
    tripId: null,
    activityId: null,
});

export default (state = initialState, action) => {

    switch (action.type) {
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