import React from 'react';
import { Container, Content,Header, Body, Title} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';

export default class NotificationsScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Notifications</Title>
                    </Body>
                </Header>
                <Content />
                <FooterTabs />
            </Container>
        )
    }
}