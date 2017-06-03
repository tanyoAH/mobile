import React from 'react';
import { View } from 'react-native';
import { Content, Container, Header} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import TripsFAB from '../components/trips/TripsFAB';

class TripsScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header/>
                <Content>
                </Content>
                <FooterTabs/>
                <TripsFAB/>
            </Container>
        )
    }
}

export default TripsScreen;