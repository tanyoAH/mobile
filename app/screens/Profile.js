import React from 'react';
import { Spinner, Content, Container, Header, Left, Body, Title, Button, Icon } from 'native-base';
import { getUser } from '../http';
import UserProfile from '../components/profile/UserProfile';

export default class ProfileScreen extends React.Component {

    state = {
        loading: true,
        user: null,
    };

    async componentDidMount() {
        const userId = this.props.match.params.userId;
        try {

        } catch (err) {
            const { data: { data }} = await getUser(userId);
            this.setState({
                user: data,
                loading: false,
            })
        }
    }

    handleBackPress = () => {
        this.props.history.goBack();
    };

    render() {
        const { loading, user } = this.state;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={this.handleBackPress}>
                            <Icon name="md-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{user && user.name}'s Profile</Title>
                    </Body>
                </Header>
                <Content>
                    {loading ?
                        <Spinner /> :
                            <UserProfile
                                name={user.fullName}
                                age={user.age}
                                from={user.from}
                                about={user.headline}
                                interests={user.interests}
                                profileUrl={user.profileUrl}
                            />
                    }
                </Content>
            </Container>
        );
    }
}