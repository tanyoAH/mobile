import React from 'react';
import { Container } from 'native-base';
import ActivitiesCarousel from '../../components/trips/ActivitiesCarousel';

export default class ActivitiesTab extends React.Component {

    render() {
        return (
            <Container>
                <ActivitiesCarousel />
            </Container>
        )
    }
}