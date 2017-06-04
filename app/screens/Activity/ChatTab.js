import React from 'react';
import { Container, Text, Grid, Row, Icon, Button, List, View, Item, Input} from 'native-base';
import { Linking, WebView } from 'react-native';
import ChatMessage from '../../components/chat/ChatMessage';

export default class ChatTab extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.msgs}>
                    <ChatMessage name='Kris Machowski' icon='../../img/kris.jpg' msg='fuck off'/>
                    <ChatMessage name='Kris Machowski' icon='../../img/kris.jpg' msg='fuck off'/>
                    <ChatMessage name='Kris Machowski' icon='../../img/kris.jpg' msg='fuck off'/>
                </View>
                <View style={styles.input}>
                    <Item regular>
                        <Input placeholder='Regular Textbox'/>
                    </Item>
                </View>
            </Container>
        )
    }

}

var styles  = {
    msgs : {
        flex: 9
    },
    input : {
        flex: 0,
        height: 60
    },
    container: {
        flexDirection: 'column'
    }
}
