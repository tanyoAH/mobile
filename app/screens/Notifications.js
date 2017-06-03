import React from 'react';
import { Container, Content,Header, Body, Title, List, ListItem, Text} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import {UserJoinedNotification,NewActivityNotification} from '../components/notifications/Notification';

export default class NotificationsScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Notifications</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <UserJoinedNotification fresh name='Kris Machowski' activity='Dogging' time='3:34am'/>
                        <UserJoinedNotification name='Kris Machowski' activity='Dogging' time='3:34am'/>
                        <UserJoinedNotification name='Kris Machowski' activity='Dogging' time='3:34am'/>
                        <NewActivityNotification activity='Flying' destination='Bangkok' time='3:34am'/>
                    </List>
                </Content>
                <FooterTabs />
            </Container>
        )
    }
}