import React from 'react';
import { Content, Container, Header, Body, Title, StyleProvider, getTheme, material, platform, Spinner} from 'native-base';
import FooterTabs from '../components/common/FooterTabs';
import UserProfile from '../components/profile/UserProfile';
import { getMyProfile } from '../http';
import { connect } from 'react-redux';
import { setUserId } from '../actions/trips';
import { bindActionCreators } from 'redux'

class MyProfileScreen extends React.Component {

    state = {
        name: '',
        about: '',
        profileUrl: '',
        from: '',
        interests: [],
        age: -1,
    }

    async componentDidMount() {
        try {
            const { data: {data}} = await getMyProfile();
            this.setState({
                name: data.fullName,
                about: data.headline,
                profileUrl: data.profileUrl,
                from: data.from,
                interests: data.interests,
                age: data.age,
            });
            this.props.setUserId(data.id);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { name, about, profileUrl, from, interests, age } = this.state;

        return (
                <Container>
                    <Header>
                        <Body>
                            <Title>My Profile</Title>
                        </Body>
                    </Header>
                    <Content>
                        {name ?
                            <UserProfile
                                name={name}
                                age={age}
                                from={from}
                                about={about}
                                profileUrl={profileUrl}
                                interests={interests}
                            /> :
                                <Spinner />
                        }

                    </Content>
                    <FooterTabs />
                </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setUserId,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(MyProfileScreen);

