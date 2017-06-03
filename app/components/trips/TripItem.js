import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { Card, CardItem, Left, Icon, Body } from 'native-base';
import strftime from 'strftime';

class TripItem extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        timePeriod: PropTypes.object,
        hourlyBudget: PropTypes.number,
        location: PropTypes.string,
        imageUrl: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        const { location, timePeriod, hourlyBudget, imageUrl, id } = this.props;


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
                        style={{ height: 180, width: '100%' }}
                        source={{ uri: 'https://i2.cdn.cnn.com/cnnnext/dam/assets/140417130634-10-things-hk-skyscrapers-horizontal-large-gallery.jpg' }}
                    />
                </CardItem>
                <CardItem>
                    <Icon name="md-calendar" />
                    <Text
                        style={{ marginRight: 10 }}
                    >
                        {strftime('%b %d', new Date(timePeriod.start))} - {strftime('%b %d', new Date(timePeriod.end))}
                        </Text>
                    <Icon name="md-cash" />
                    <Text>{hourlyBudget} / h</Text>
                </CardItem>
            </Card>
        )
    }
}

export default TripItem;
