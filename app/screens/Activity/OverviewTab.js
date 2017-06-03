import React from 'react';
import { Container } from 'native-base';
import ActivityMap from '../../components/activities/ActivityMap';

export default class UsersTab extends React.Component {

    render() {
        return (
            <Container>
                <ActivityMap
                    coordinates={{
                        latitude: 22.28552,
                        longitude: 114.15769,
                    }}
                />
            </Container>
        )
    }

}