import React from 'react';
import { Container, Header, Tabs, Tab, Button, Title, Left, Icon, Body, TabHeading, Text } from 'native-base';
import { connect } from 'react-redux';
import { setTripId } from '../../actions/trips';
import { bindActionCreators } from 'redux';
import ItineraryTab from './ItineraryTab';
import ActivitiesTab from './ActivitiesTab';
import { getTrip } from '../../http';

class Trip extends React.Component {

    state = {
        trip: null,
    }

    async componentDidMount() {
        const tripId = this.props.match.params.tripId;
        this.props.setTripId(tripId);
        try {
            const { data: { data }} = await getTrip(tripId);
            this.setState({
                trip: data,
            })
        } catch (err) {
            console.log(err);
        }
    }

    handleBackPress = () => {
        this.props.history.goBack();
    };

    render() {
        const { trip } = this.state;
        console.log(trip);

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.handleBackPress}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{trip && trip.locationName}</Title>
                    </Body>
                </Header>
                <Tabs>
                    <Tab
                        heading={
                            <TabHeading>
                                <Icon name="md-list-box" />
                                <Text>Itinerary</Text>
                            </TabHeading>
                        }
                    >
                        <ItineraryTab
                            activities={trip ? trip.activities : []}
                        />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Icon name="md-partly-sunny" />
                                <Text>Activities</Text>
                            </TabHeading>
                        }
                    >
                        <ActivitiesTab
                        />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setTripId,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(Trip);
