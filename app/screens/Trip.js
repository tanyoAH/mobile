import React from 'react';
import { Container } from 'native-base';
import { AndroidBackButton } from 'react-router-native';

export default class Trip extends React.Component {

    render() {

        return (
            <Container>
                <AndroidBackButton />
            </Container>
        )
    }
}