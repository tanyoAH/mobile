import React from 'react';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

export default class ActivityMap extends React.Component {

    static propTypes = {
        coordinates: PropTypes.object,
    };

    render() {
        const { coordinates } = this.props;

        return (
            <MapView
                style={{ height: 300, width: '100%' }}
                region={{
                    ...coordinates,
                    latitudeDelta: 0.4,
                    longitudeDelta: 0.4,
                }}
            >
                <MapView.Marker
                    coordinate={coordinates}
                />
            </MapView>
        );
    }
}