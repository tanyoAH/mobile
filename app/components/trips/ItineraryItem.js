import React from 'react';
import PropTypes from 'prop-types';
import strftime from 'strftime';

import { ListItem, Right, Body, Text } from 'native-base';

export default class ItineraryItem extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        location: PropTypes.string,
        members: PropTypes.number,
        time: PropTypes.object,
        onPress: PropTypes.func,
    };

    render() {
        const { name, location, members, time, onPress } = this.props;
        console.log(this.props);

        return (
            <ListItem
                onPress={onPress}
            >
                <Body>
                    <Text>{name}</Text>
                    <Text>{location}</Text>
                    <Text note>{members} people going</Text>
                </Body>
                <Right>
                    <Text>{strftime('%I:%M', new Date(time.start))} - {strftime('%I:%M', new Date(time.end))}</Text>
                </Right>
            </ListItem>
        );
    }

}