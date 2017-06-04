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
            const { data: { data }} = await getUser(userId);
            this.setState({
                user: data,
                loading: false,
            })
        } catch (err) {
            console.log(err);
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
                        <Button transparent onPress={this.handleBackPress}>
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{user && user.fullName}'s Profile</Title>
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