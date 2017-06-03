import React from 'react';
import ActivityItem from './ActivityItem';
import { getActivityRecommendations } from '../../http';
import { DeckSwiper } from 'native-base';
import { connect } from 'react-redux';

export default class ActivitiesCarousel extends React.Component {

    async componentDidMount() {
        const { data: { data }} = await getActivityRecommendations();

    }

    render() {


        return (
            <DeckSwiper

            />
        )
    }

}