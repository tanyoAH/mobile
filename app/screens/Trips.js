import React from 'react';
import { View } from 'react-native';
import { Content, Container } from 'native-base';
import FooterTabs from '../navigators/FooterTabs';

class TripsScreen extends React.Component {

    static navigationOptions = {
        title: 'Trips',
    };

    render() {
        return (
            <Container>
                <Content>
                </Content>
                <FooterTabs/>
            </Container>
        )
    }
}

export default TripsScreen;