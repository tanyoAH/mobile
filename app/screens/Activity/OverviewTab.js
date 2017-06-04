import React from 'react';
import { Container, Text, Grid, Row, Icon, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Linking, WebView } from 'react-native';
import ActivityMap from '../../components/activities/ActivityMap';

export default class UsersTab extends React.Component {

    handleSitePress = async () => {
        try {
            await Linking.openURL(this.props.activity.tripAdvisorUrl);
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const{ activity } = this.props;
        const { location, timePeriod: time } = activity;

        return (
            <Container>
                <ActivityMap
                    coordinates={{
                        latitude: location.y,
                        longitude: location.x,
                    }}
                />
                <Grid style={{ marginTop: 10, marginLeft: 8}}>
                    <Row>
                        <Icon name="md-book" />
                        <Text style={{ marginLeft: 10, marginTop: 4}} note>{activity.description}</Text>
                    </Row>
                    <Row style={{ marginTop: -50}}>
                        <Icon name="md-time" />
                        <Text style={{ marginLeft: 10, marginTop: 4}} note>{activity.durationHours} hours</Text>
                    </Row>

                    <Row style={{ marginTop: -50}}>
                        <Icon name="md-cash" />
                        <Text style={{ marginLeft: 10, marginTop: 4}} note>{activity.price} per hour</Text>
                    </Row>
                    <Row style={{ marginTop: -50}}>
                        <Button onPress={this.handleSitePress}>
                            <EntypoIcon name="tripadvisor" size={24} />
                            <Text>  TripAdvisor</Text>
                        </Button>
                    </Row>
                </Grid>
            </Container>
        )
    }

}