import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import strftime from 'strftime';
import { Card, CardItem, Left, Body, Text, Thumbnail, Grid, Row, Icon } from 'native-base';

export default class SliderEntry extends Component {

    static propTypes = {
        thumbnailUrl: PropTypes.string,
        name: PropTypes.string,
        time: PropTypes.object,
        budget: PropTypes.number,
        onPress: PropTypes.func,
    };


    render () {
        const { budget, thumbnailUrl, name, time, onPress } = this.props;

        return (
            <Card onPress={onPress} style={{ elevation: 3 }}>
                <CardItem>
                    <Left>
                        <Body>
                            <Grid>
                                <Row>
                                    <Text>{name}</Text>
                                </Row>
                                <Row>
                                    <Icon name="md-pin" style={{ fontSize: 19 }} />
                                    <Text note> {location}</Text>
                                    <Icon name="md-time" style={{ fontSize: 19 }}/>
                                    <Text note>{strftime('%I:%M', new Date(time.start))} - {strftime('%I:%M', new Date(time.end))}</Text>
                                </Row>
                            </Grid>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{
                            uri: thumbnailUrl,
                        }}
                    />
                </CardItem>
                <CardItem>
                    <Icon name="md-money" />
                    <Text>{budget} USD per hour</Text>
                </CardItem>
            </Card>
        )
    }
}