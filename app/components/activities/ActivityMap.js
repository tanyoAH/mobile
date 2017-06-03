import React from 'react';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import { getActivity } from '../../actions/trips';

export default class ActivityMap extends React.Component {

    static propTypes = {
        coordinates: PropTypes.object,
    };

    async componentDidMount() {
        try {
            const { data: {data}} = await getActivity();
            this.setState({
                activity: data,
            });
        } catch (err) {
            console.log(err);
        }
    }

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