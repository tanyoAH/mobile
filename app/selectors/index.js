import { createSelector } from 'reselect';

const selectMainDomain = () => (state) => state.main;

export const selectTripTab = () => createSelector(
    selectMainDomain(),
    (state) => state.get('tripTab')
);