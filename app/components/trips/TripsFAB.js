import React from 'react';
import { Icon, Fab, Button, Content, View, Text, StyleSheet } from 'native-base';
import { withRouter } from 'react-router-native'

class TripsFAB extends React.Component {

    state = {
        active: false
    };

    handlePress = () => {
        this.props.history.push('/tripsCreator')
    };

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <Fab
                active={this.state.active}
                onPress={() => this.toggleActive()}
                containerStyle={{ bottom: 70}}
                direction="up"
                position="bottomRight"
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

// let styles = StyleSheet.create({
//     container: {
//         height: 1
//     }
// })

export default TripsFAB;
