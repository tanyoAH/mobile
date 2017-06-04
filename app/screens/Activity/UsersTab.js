import React from 'react';
import { List, Container } from 'native-base';
import { withRouter } from 'react-router-native';
import ParticipantItem from '../../components/activities/ParticipantItem';
import { getAllCommitments } from '../../http';

class UsersTab extends React.Component {

    handleParticipantPress = (id) => () => {
        this.props.history.push(`/users/${id}`)
    };

    render() {
        const { participants } = this.props;

        return (
            <Container>
                <List>
                    {participants.map((participant) =>
                        <ParticipantItem
                            key={participant.id}
                            onPress={this.handleParticipantPress(participant.id)}
                            location={participant.from}
                            imageUrl={participant.profileUrl}
                            age={participant.age}
                        />
                    )}
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