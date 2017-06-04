import React from 'react';
import { List, View, Content, ListItem, Text } from 'native-base';
import ItineraryItem from '../../components/trips/ItineraryItem'
import { withRouter } from 'react-router-native';
import strftime from 'strftime'
import * as _ from 'lodash';
import { createStructuredSelector } from 'reselect';

class ItineraryTab extends React.Component {

    handleItemPress = (id) => () => {
        this.props.history.push(`/activities/${id}`)
    };

    render() {
        const { activities } = this.props;
        let output = [];
        let prevDay = null;

        for (let activity of _.sortBy(activities, (act) => act.timePeriod.start)) {
            const currDate = new Date(activity.timePeriod.start);
            if (!prevDay || prevDay !== currDate.getDay()) {
                output.push(
                    <ListItem itemHeader key={`${activity.id}test`}>
                        <Text>{strftime('%b %d', currDate)}</Text>
                    </ListItem>
                );
                prevDay = currDate.getDay();
            }
            output.push(
                <ItineraryItem
                    key={activity.id}
                    onPress={this.handleItemPress(activity.id)}
                    name={activity.name}
                    time={activity.timePeriod}
                    members={activity.peopleGoingCount}
                />
            )
        }

        return (
            <Content>
                <List>
                    {output.length ? output : <Text style={{ textAlign: 'center', marginTop: 8 }}>No activities on the itinerary</Text>}
                </List>
            </Content>
        )
    }
}

export default withRouter(ItineraryTab);
