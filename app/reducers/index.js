import { combineReducers } from 'redux';
import mainReducer from './main';
import { AppNavigator } from '../navigators';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Trips'));

const navReducer = (state = initialState, action) => {
    console.log(action);
    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default combineReducers({
    main: mainReducer,
    nav: navReducer,
});
