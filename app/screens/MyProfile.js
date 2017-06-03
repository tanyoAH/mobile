import React from 'react';
import { Content, Container, Header, Body, Title} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';

class MyProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'My Profile',
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>My Profile</Title>
                    </Body>
                </Header>
                <Content>

                </Content>
                <FooterTabs />
            </Container>
        )
    }
}

export default MyProfileScreen;

