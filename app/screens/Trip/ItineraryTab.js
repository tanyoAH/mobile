import React from 'react';
import { List, View } from 'native-base';
import ItineraryItem from '../../components/trips/ItineraryItem'
import { withRouter } from 'react-router-native';


class ItineraryTab extends React.Component {

    handleItemPress = (id) => () => {
        this.props.history.push(`/activities/${id}`)
    };

    render() {
        return (
            <View>
                <List>
                    <ItineraryItem
                        onPress={this.handleItemPress('test')}
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

export default withRouter(ItineraryTab);
