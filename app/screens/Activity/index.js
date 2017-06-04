import React from 'react';
import { Spinner, ActionSheet, Right, Body, Container, Header, Tabs, Tab, Left, Button, Icon, TabHeading, Text, Title } from 'native-base';
import OverviewTab from './OverviewTab';
import UsersTab from './UsersTab';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActivityId } from '../../actions/trips';
import { selectActivityId, selectTripId } from '../../selectors';
import { createStructuredSelector } from 'reselect';
import { getActivity, createCommitment } from '../../http';

class Activity extends React.Component {

    state = {
        activity: null,
    };

    async componentDidMount() {
        const activityId = this.props.match.params.activityId;
        this.props.setActivityId(activityId);
        await this.loadData();
    }

    loadData = async () => {
        const activityId = this.props.match.params.activityId;
        try {
            const { data: { data }}  = await getActivity(this.props.tripId, activityId);
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
        }, async (index) => {
            if (index !== 2) {
                await createCommitment(this.props.tripId, this.props.activityId);
                await this.loadData();
            }
        });
    };

    render() {
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
                    {!!activity && !activity.isCommitted &&
                        <Right>
                            <Button transparent onPress={this.handleJoinPress}>
                                <Text>Join</Text>
                            </Button>
                        </Right>
                    }
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
                        {activity ?
                            <OverviewTab
                                activity={activity}
                            /> :
                            <Spinner />
                        }

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
                            participants={activity ? activity.committedUsers : []}
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
