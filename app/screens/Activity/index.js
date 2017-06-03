import React from 'react';
import { Right, Body, Container, Header, Tabs, Tab, Left, Button, Icon, TabHeading, Text, Title } from 'native-base';
import OverviewTab from './OverviewTab';
import UsersTab from './UsersTab';

export default class Activity extends React.Component {

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
                    </Body>
                    <Right>

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
                        <OverviewTab />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Icon name="md-people" />
                                <Text>Participants</Text>
                            </TabHeading>
                        }
                    >
                        <UsersTab />
                    </Tab>
                </Tabs>
            </Container>
        )
    }

}