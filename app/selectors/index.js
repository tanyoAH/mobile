import { createSelector } from 'reselect';

const selectMainDomain = () => (state) => state.main;

export const selectTripTab = () => createSelector(
    selectMainDomain(),
    (state) => state.get('tripTab')
);

export const selectTrips = () => createSelector(
    selectMainDomain(),
    (state) => state.get('trips').toJS(),
);

export const selectConfirmedActivities = () => createSelector(
    selectMainDomain(),
    (state) => state.get('confirmedActivities').toJS(),
);