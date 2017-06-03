import React from 'react';
import { Container, Header, Tabs, Tab, Button, Title, Left, Icon, Body, TabHeading, Text } from 'native-base';
import { connect } from 'react-redux';
import { setTripId } from '../../actions/trips';
import { bindActionCreators } from 'redux';
import ItineraryTab from './ItineraryTab';
import ActivitiesTab from './ActivitiesTab';

class Trip extends React.Component {

    componentDidMount() {
        this.props.setTripId(this.props.match.params.tripId);
    }

    handleBackPress = () => {
        this.props.history.goBack();
    };

    render() {

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.handleBackPress}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title></Title>
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
                        <ItineraryTab />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Icon name="md-partly-sunny" />
                                <Text>Activities</Text>
                            </TabHeading>
                        }
                    >
                        <ActivitiesTab />
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
