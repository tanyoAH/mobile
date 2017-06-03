import React from 'react';
import { View } from 'react-native';
import { Content, Container, Header, Body, Title} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import TripsFAB from '../components/trips/TripsFAB';
import TripList from '../components/trips/TripList';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../actions/trips';

class TripsScreen extends React.Component {

    componentDidMount() {
        this.props.fetchTrips();
    }

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

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        fetchTrips,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(TripsScreen);