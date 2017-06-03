import React from 'react';
import { Icon, Fab, Button, Content, View, Text, StyleSheet } from 'native-base';
import { withRouter } from 'react-router-native'

class TripsFAB extends React.Component {

    handlePress = () => {
        this.props.history.push('/tripsCreator')
    };

    render() {
        return (
            <Fab
                active={false}
                onPress={this.handlePress}
                containerStyle={{ bottom: 70}}
                direction="up"
                position="bottomRight"
                style = {{backgroundColor: '#e2771f'}}
            >
                <Icon
                    name="md-add"
                />
            </Fab>
        )
    }
}
export default withRouter(TripsFAB);
