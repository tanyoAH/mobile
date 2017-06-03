import React from 'react';
import { Right, Body, Container, Header, Tabs, Tab, Left, Button, Icon, TabHeading, Text, Title } from 'native-base';
import OverviewTab from './OverviewTab';
import UsersTab from './UsersTab';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActivityId } from '../../actions/trips';
import { selectActivityId, selectTripId } from '../../selectors';
import { createStructuredSelector } from 'reselect';

class Activity extends React.Component {

    componentDidMount() {
        this.props.setActivityId(this.props.match.params.activityId);
    }

    handleBackPress = () => {
        this.props.history.goBack();
    };

    handleJoinPress = () => {

    };

    render() {
        const { activityId, tripId } = this.props;

        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.handleBackPress}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
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
                            tripId={tripId}
                            activityId={activityId}
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
