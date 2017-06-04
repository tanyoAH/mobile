import React from 'react';
import ActivityItem from './ActivityItem';
import { withRouter } from 'react-router-native';
import { getActivityRecommendations } from '../../http';
import { DeckSwiper, View } from 'native-base';
import { connect } from 'react-redux';
import { selectTripId } from '../../selectors';
import { createStructuredSelector } from 'reselect';

class ActivitiesCarousel extends React.Component {

    state = {
        activities: [],
    };

    async componentDidMount() {
        try {
            const { data: { data }} = await getActivityRecommendations(this.props.tripId);
            this.setState({
                activities: data,
            });
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }

    handleActivityPress = (id) => () => {
        this.props.history.push(`/activities/${id}`);
    };

    renderCard = (item) => (
        <ActivityItem
            key={item.id}
            budget={item.price}
            name={item.name}
            thumbnailUrl={item.thumbnailUrl}
            time={item.time}
            onPress={this.handleActivityPress(item.id)}
        />
    );

    render() {
        const { activities } = this.state;

        return (
            <DeckSwiper
                dataSource={activities}
                renderItem={this.renderCard}
            />
        )
    }

}

const mapStateToProps = createStructuredSelector({
    tripId: selectTripId(),
});

export default withRouter(connect(mapStateToProps)(ActivitiesCarousel));

