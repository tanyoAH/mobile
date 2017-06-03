import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';

export default class LocationMap extends React.Component {

    state = {
        markerCoords: null,
        region: {
            latitude: 22.28552,
            longitude: 114.15769,
            latitudeDelta: 0.7,
            longitudeDelta: 0.7,
        }
    };

    getValue = () => {
        return this.state.markerCoords;
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((data) => {
            console.log(data);
        })
    }

    handleMapPress = ({ nativeEvent }) => {
        this.setState({
            markerCoords: nativeEvent.coordinate,
        })
    };

    handleRegionChange = ({ nativeEvent }) => {
        this.setState({
            region: nativeEvent
        });
    };

    render() {
        const { markerCoords, region } = this.state;

        return (
            <MapView
                onPress={this.handleMapPress}
                onRegionChange={this.handleRegionChange}
                region={region}
                style={{ width: '100%', height: 250}}
            >
                {markerCoords &&
                    <MapView.Marker
                      coordinate={markerCoords}
                      title="Destination"
                    />
                }
            </MapView>
        )
    }

}