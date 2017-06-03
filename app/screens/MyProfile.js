import React from 'react';
import { Content, Container, Header, Body, Title, StyleProvider, getTheme, material, platform} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import UserProfile from '../components/profile/UserProfile';

class MyProfileScreen extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
                <Container>
                    <Header>
                        <Body>
                            <Title>My Profile</Title>
                        </Body>
                    </Header>
                    <Content>
                        <UserProfile name='Kris Machowski' 
                        age={28}
                        from='Krakow'
                        about="I hate literally everything. Don't ever contact me, lest you realise the crushing weight of existence."
                        interests={['skiing', 'snorkelling', 'climbing', 'hacking', 'hiking']}/>
                    </Content>
                    <FooterTabs />
                </Container>
        )
    }
}

export default MyProfileScreen;

