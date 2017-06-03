import React from 'react';
import TripItem from './TripItem';
import { View, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTrips, selectTripsLoading } from '../../selectors';

class TripList extends React.Component {

    render() {
        const { tripsLoading, trips } = this.props;

        return (
            <View>
                {tripsLoading &&
                    <Spinner />
                }
                {!trips.length && !tripsLoading &&
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
    tripsLoading: selectTripsLoading(),
});

export default connect(mapStateToProps)(TripList);
