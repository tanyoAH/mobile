import React from 'react';
import { Content, Container } from 'native-base';
import FooterTabs from '../components/common/FooterTabs';

class MyProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'My Profile',
    };

    render() {
        return (
            <Container>
                <Content>

                </Content>
                <FooterTabs />
            </Container>
        )
    }
}

export default MyProfileScreen;

