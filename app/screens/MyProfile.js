import React from 'react';
import { Content, Container, Header, Body, Title} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import UserProfile from '../components/profile/UserProfile';

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
                    <UserProfile name='Kris Machowski' email='kris.machowski@gmail.com' interests={['skiing', 'snorkelling', 'climbing', 'hacking', 'hiking']}/>
                </Content>
                <FooterTabs />
            </Container>
        )
    }
}

export default MyProfileScreen;

