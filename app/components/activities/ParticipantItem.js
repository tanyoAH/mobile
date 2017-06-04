import React from 'react';
import { ListItem, Left, Thumbnail, Body, Right, Text, Grid, Row, Icon, Button } from 'native-base';
import PropTypes from 'prop-types';

export default class ParticipantItem extends React.Component {

    static propTypes = {
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.number,
        location: PropTypes.string,
        onPress: PropTypes.func,
    };

    render() {
        const { imageUrl, name, age, location, onPress } = this.props;

        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail
                        source={{
                            uri: imageUrl,
                        }}
                    />
                </Left>
                <Body>
                    <Grid>
                        <Row>
                            <Text>{name}</Text>
                        </Row>
                        <Row>
                            <Icon name="md-home" style={{ fontSize: 19 }} />
                            <Text note> {location}</Text>
                            <Icon name="md-person" style={{ fontSize: 19 }}/>
                            <Text note> {age} years old</Text>
                        </Row>
                    </Grid>
                </Body>
                <Right>
                    <Button transparent onPress={onPress}>
                        <Icon name="arrow-forward" />
                    </Button>
                </Right>
            </ListItem>
        )
    }

}
