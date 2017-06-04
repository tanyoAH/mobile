import React from 'react';
import { Container, ListItem, Text, Card, Body, CardItem, View, Thumbnail} from 'native-base';

export default class ChatMessage extends React.Component {

    render() {
        return (
                <View style={styles.cont}>
                    <View>
                        <Thumbnail style={styles.img} small source={require(this.props.icon)} />
                    </View>
                    <Card style={styles.msg}>
                        <CardItem style={{paddingTop: 4, paddingBottom: 6}}>
                        <Body>
                                <Text style={styles.nameText}>{this.props.name}</Text>
                                <Text note>{this.props.msg}</Text>
                        </Body>
                        </CardItem>
                    </Card>
                </View>
        );
    }
}

var styles = {
    msg : {
        flex: 1
    },
    cont : {
        flexDirection: 'row',
        marginTop: 4
    },
    img : {
        flex: 0,
        marginRight: 4
    },
    nameText: {
        fontSize: 14
    }
}