import React from 'react';
import { View } from 'react-native';
import { Content, Container, Header, Body, Title} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import TripsFAB from '../components/trips/TripsFAB';
import TripList from '../components/trips/TripList';

class TripsScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Trips</Title>
                    </Body>
                </Header>
                <Content>
                    <TripList />
                </Content>
                <FooterTabs/>
                <TripsFAB/>
            </Container>
        )
    }
}

export default TripsScreen;