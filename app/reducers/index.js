import { combineReducers } from 'redux';
import AppNavigator from '../navigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Index'));

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default combineReducers({
    nav: navReducer,
});
