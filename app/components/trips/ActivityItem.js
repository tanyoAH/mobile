import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableHighlight } from 'react-native';
import strftime from 'strftime';
import { Card, CardItem, Left, Body, Text, Thumbnail, Grid, Row, Icon, Right, Button } from 'native-base';

export default class ActivityItem extends Component {

    static propTypes = {
        thumbnailUrl: PropTypes.string,
        name: PropTypes.string,
        time: PropTypes.object,
        budget: PropTypes.number,
        onPress: PropTypes.func,
    };


    render () {
        const { budget, thumbnailUrl, name, time, onPress } = this.props;
        console.log(time);

        return (
            <Card style={{ elevation: 3 }}>
                <CardItem onPress={onPress} >
                    <Left>
                        <Body>
                        <Grid>
                            <Row style={{ marginBottom: 5}}>
                                <Text>{name}</Text>
                            </Row>
                            <Row>
                                <Icon name="md-time" style={{ fontSize: 19 }}/>
                                <Text note>  {strftime('%I:%M', new Date(time.start))} - {strftime('%I:%M', new Date(time.end))}</Text>
                            </Row>
                        </Grid>

                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image

                        style={{ width: '100%', height: 200 }}
                        source={{
                            uri: thumbnailUrl,
                        }}
                    />
                </CardItem>
                <CardItem>
                    <Icon name="md-cash" />
                    <Text>{budget} USD per hour</Text>
                    <Right>
                        <Button small primary transparent iconRight onPress={onPress}>
                            <Text>See More</Text>
                            <Icon name="md-arrow-forward" />

                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}