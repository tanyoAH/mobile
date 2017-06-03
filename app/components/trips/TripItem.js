import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { Card, CardItem, Left, Icon, Body } from 'native-base';

class TripItem extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        hourlyBudget: PropTypes.number,
        location: PropTypes.string,
        imageUrl: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        const { location, startDate, endDate, hourlyBudget, imageUrl, id } = this.props;

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Link
                                to={`/trips/${id}`}
                            >
                                <Text>{location}</Text>
                            </Link>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        resizeMode="contain"
                        source={{uri: imageUrl}}
                    />
                </CardItem>
                <CardItem>
                    <Icon name="md-calendar" />
                    <Text
                        style={{ marginRight: 10 }}
                    >
                        {startDate} - {endDate}
                        </Text>
                    <Icon name="md-cash" />
                    <Text>{hourlyBudget} / h</Text>
                </CardItem>
            </Card>
        )
    }
}

export default TripItem;
