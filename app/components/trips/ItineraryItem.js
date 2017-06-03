import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, Right, Body, Text } from 'native-base';

export default class ItineraryItem extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        location: PropTypes.string,
        members: PropTypes.number,
        time: PropTypes.string,
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
                    <Text>{time}</Text>
                </Right>
            </ListItem>
        );
    }

}