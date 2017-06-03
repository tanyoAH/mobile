import React from 'react';
import { List, Container } from 'native-base';
import { withRouter } from 'react-router-native';
import ParticipantItem from '../../components/activities/ParticipantItem';
import { getAllCommitments } from '../../http';

class UsersTab extends React.Component {

    state = {
        participants: [],
    };

    async componentDidMount() {
        try {
            const { data: { data }} = await getAllCommitments(this.props.tripId, this.props.activityId);
            this.setState({
                participants: data.committedUsers || [],
            })
        } catch (err) {
            console.log(err);
        }
    }

    handleParticipantPress = (id) => () => {
        this.props.history.push(`/users/${id}`)
    };

    render() {
        const { participants } = this.state;

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