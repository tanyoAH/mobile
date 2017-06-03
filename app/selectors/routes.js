import { createSelector } from 'reselect';

const selectNavDomain = () => (state) => state.nav;

export const selectRoute = () => createSelector(
    selectNavDomain(),
    (nav) => nav.routes[nav.index],
);