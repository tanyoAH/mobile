import React from 'react';
import TripItem from './TripItem';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTrips } from '../../selectors';

class TripList extends React.Component {

    render() {
        const { trips } = this.props;
        console.log(trips);

        return (
            <View>
                {!trips.length &&
                    <Text style={{ textAlign: 'center', marginTop: 15 }}>No Trips Found!</Text>
                }
                {trips.map((trip) =>
                    <TripItem
                        key={trip.id}
                        id={trip.id}
                        location={trip.locationName}
                        timePeriod={trip.timePeriod}
                        hourlyBudget={trip.activityBudget}
                    />
                )}
            </View>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    trips: selectTrips(),
});

export default connect(mapStateToProps)(TripList);
