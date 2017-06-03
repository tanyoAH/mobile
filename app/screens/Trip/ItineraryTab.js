import React from 'react';
import { List, View } from 'native-base';
import ItineraryItem from '../../components/trips/ItineraryItem'


export default class ItineraryTab extends React.Component {

    render() {
        return (
            <View>
                <List>
                    <ItineraryItem
                        name="Dragon Boating"
                        location="Sai Kung Beach"
                        members={11}
                        time="12:00"
                    />
                </List>
            </View>
        )
    }
}