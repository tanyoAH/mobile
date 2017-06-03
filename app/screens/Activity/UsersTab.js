import React from 'react';
import { List, Container } from 'native-base';
import { withRouter } from 'react-router-native';
import ParticipantItem from '../../components/activities/ParticipantItem';

class UsersTab extends React.Component {

    handleParticipantPress = (id) => () => {
        this.props.history.push(`/users/${id}`)
    };

    render() {
        return (
            <Container>
                <List>
                    <ParticipantItem
                        onPress={this.handleParticipantPress(1)}
                        location="Hong Kong"
                        age="18"
                        name="Daniel Hsing"
                    />
                </List>
            </Container>
        )
    }

}

export default withRouter(UsersTab);