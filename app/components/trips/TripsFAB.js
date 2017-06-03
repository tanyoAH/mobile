import React from 'react';
import { Icon, Fab, Button, Content } from 'native-base';
import { withRouter } from 'react-router-native'

class TripsFAB extends React.Component {

    state = {
        active: false,
    };

    handlePress = () => {
        this.props.history.push('/tripsCreator')
    };

    toggleActive = () => {
        this.setState({
            active: !this.state.active,
        })
    }

    render() {

        return (
            <Fab
                active={false}
                onPress={this.toggleActive}
                direction="down"
                style={{ bottom: 65 }}
            >
                <Icon
                    name="md-add"
                />
                <Button onPress={this.handlePress}>
                    <Icon name="md-add-circle" />
                </Button>
            </Fab>
        )
    }
}

export default TripsFAB;
