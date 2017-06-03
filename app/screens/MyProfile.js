import React from 'react';
import { Text } from 'react-native';

export default class MyProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'My Profile',
    };

    render() {
        return (
            <Text>Hello World!</Text>
        )
    }
}
