import React from 'react';
import { List, View } from 'native-base';
import ItineraryItem from '../../components/trips/ItineraryItem'
import { withRouter } from 'react-router-native';
import { createStructuredSelector } from 'reselect';

class ItineraryTab extends React.Component {

    handleItemPress = (id) => () => {
        this.props.history.push(`/activities/${id}`)
    };

    render() {
        const { activities } = this.props;

        return (
            <View>
                <List>
                    <ItineraryItem
                        key={1}
                        onPress={this.handleItemPress(1)}
                        name="Testing"
                        time={{
                            start: new Date(1111),
                            end: new Date(22)
                        }}
                    />
                    {activities.map((activity) =>
                        <ItineraryItem
                            key={activity.id}
                            onPress={this.handleItemPress(activity.id)}
                            name={activity.name}
                            time={activity.timePeriod}
                        />
                    )}
                </List>
            </View>
        )
    }
}

export default withRouter(ItineraryTab);
