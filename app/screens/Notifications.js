import React from 'react';
import { Container } from 'native-base';
import FooterTabs from '../navigators/FooterTabs';

export default class NotificationsScreen extends React.Component {

    render() {
        return (
            <Container>
                <FooterTabs />
            </Container>
        )
    }
}