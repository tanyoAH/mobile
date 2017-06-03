import React from 'react';
import { Container, Content } from 'native-base';
import FooterTabs from '../components/common/FooterTabs';

export default class NotificationsScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content />
                <FooterTabs />
            </Container>
        )
    }
}