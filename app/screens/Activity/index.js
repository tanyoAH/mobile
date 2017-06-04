import React from 'react';
import { ActionSheet, Right, Body, Container, Header, Tabs, Tab, Left, Button, Icon, TabHeading, Text, Title } from 'native-base';
import OverviewTab from './OverviewTab';
import UsersTab from './UsersTab';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActivityId } from '../../actions/trips';
import { selectActivityId, selectTripId } from '../../selectors';
import { createStructuredSelector } from 'reselect';
import { getActivity } from '../../http';

class Activity extends React.Component {

    state = {
        activity: null,
    };

    async componentDidMount() {
        const activityId = this.props.match.params.activityId;
        this.props.setActivityId(activityId);
        try {
            const { data: { data }} = await getActivity(this.props.tripId, activityId);
            this.setState({
                activity: data,
            })
        } catch (err) {
            console.log(err);
        }
    }

    handleBackPress = () => {
        this.props.history.goBack();
    };

    handleJoinPress = () => {
        ActionSheet.show({
            options: [
                'PayPal',
                'Credit Card',
                'Cancel'
            ],
            cancelButtonIndex: 2,
            title: 'Pay with'
        }, (index) => {
            console.log(`${index} clicked`);
        });
    };

    render() {
        const { activityId, tripId } = this.props;
        const { activity } = this.state;
        console.log(activity);

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.handleBackPress}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{!!activity && activity.name}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.handleJoinPress}>
                            <Text>Join</Text>
                        </Button>
                    </Right>
                </Header>
                <Tabs>
                    <Tab
                        heading={
                            <TabHeading>
                                <Icon name="md-list-box" />
                                <Text>Overview</Text>
                            </TabHeading>
                        }
                    >
                        <OverviewTab
                            activity={activity}
                        />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Icon name="md-people" />
                                <Text>Participants</Text>
                            </TabHeading>
                        }
                    >
                        <UsersTab
                            tripId={tripId}
                            activityId={activityId}
                        />
                    </Tab>
                </Tabs>
            </Container>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    tripId: selectTripId(),
    activityId: selectActivityId(),
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setActivityId,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
