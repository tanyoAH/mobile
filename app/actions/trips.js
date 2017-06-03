import { getAllTrips } from '../http';

export const SET_TRIPS = 'SET_TRIPS';
export const SET_CONFIRMED_ACTIVITIES = 'SET_CONFIRMED_ACTIVITIES';
export const SET_TRIP_ID = 'SET_TRIP_ID';
export const SET_ACTIVITY_ID = 'SET_ACTIVITY_ID';
export const SET_TRIPS_LOADING = 'SET_TRIPS_LOADING';

export const setTrips = (trips) => ({
    type: SET_TRIPS,
    trips,
});

export const setTripsLoading = (loading) => ({
    type: SET_TRIPS_LOADING,
    loading,
});

export const fetchTrips  = () => async (dispatch) => {
    try {
        dispatch(setTripsLoading(true));
        const { data: { data }} = await getAllTrips();
        dispatch(setTripsLoading(false));
        dispatch(setTrips(data));
    } catch (err) {
        console.log(err);
    }
};

export const setConfirmedActivities = (activities) => ({
    type: SET_CONFIRMED_ACTIVITIES,
    activities,
});

export const setTripId = (tripId) => ({
    type: SET_TRIP_ID,
    tripId,
});

export const setActivityId = (activityId) => ({
    type: SET_ACTIVITY_ID,
    activityId,
});

