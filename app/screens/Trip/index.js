import React from 'react';
import { Container, Header, Tabs, Tab, Button, Title, Left, Icon, Body, TabHeading, Text } from 'native-base';
import { connect } from 'react-redux';
import { selectTripTab } from '../../selectors';
import ItineraryTab from './ItineraryTab';
import ActivitiesTab from './ActivitiesTab';

class Trip extends React.Component {

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

export default Trip;
