import React from 'react';
import {Body, Title, List, ListItem, Text, Thumbnail, Left, Right, Icon} from 'native-base';

export class UserJoinedNotification extends React.Component {
    render() {
        return (
            <ListItem avatar style={{marginTop: 0, marginLeft: 0, padding: 0, backgroundColor: this.props.fresh ? '#f9e2c0' : '#fff'}}>
                <Left style={{width:56}}>
                    {/*<Thumbnail source={require('../../img/kris.jpg')} />*/}
                    <Icon style={styles.icon} name="md-person" />
                </Left>
                <Body>
                    <Text>
                        <Text note style={styles.bold}>{this.props.name} </Text>
                        <Text note>just joined your activity </Text>
                        <Text note style={styles.bold}>{this.props.activity}</Text>
                    </Text>
                </Body>
                <Right>
                    <Text note>{this.props.time}</Text>
                </Right>
            </ListItem>
        )
    }
}

export class NewActivityNotification extends React.Component {

    render() {
        return (
            <ListItem avatar style={{marginTop: 0, marginLeft: 0, padding: 0, backgroundColor: this.props.fresh ? '#f9e2c0' : '#fff'}}>
                <Left style={{width:56}}>
                    <Icon style={styles.icon} name="md-notifications" />
                </Left>
                <Body>
                    <Text>
                        <Text note>A new activity (</Text>
                        <Text note style={styles.bold}>{this.props.activity}</Text>
                        <Text note>) is now available on your trip to </Text>
                        <Text note style={styles.bold}>{this.props.destination}</Text>
                    </Text>
                </Body>
                <Right>
                    <Text note>{this.props.time}</Text>
                </Right>
            </ListItem>
        )
    }
}

var styles = {
    bold : {
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 50,
        width: 40,
        left: 11,
        color: '#aaa'
    }
}