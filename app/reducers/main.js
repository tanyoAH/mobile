import { fromJS } from 'immutable';

const initialState = fromJS({
    tripTab: 'itinerary', // or activities

});

export default (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}