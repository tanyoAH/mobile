import React from 'react';
import ActivityItem from '../../components/trips/ActivityItem';
import { withRouter } from 'react-router-native';
import { getActivityRecommendations } from '../../http';
import { Spinner, Content, Text } from 'native-base';
import { connect } from 'react-redux';
import { selectTripId } from '../../selectors';
import { createStructuredSelector } from 'reselect';

class ActivitiesCarousel extends React.Component {

    state = {
        activities: [],
        loading: true,
    };

    async componentDidMount() {
        try {
            const { data: { data }} = await getActivityRecommendations(this.props.tripId);
            console.log(data);
            this.setState({
                activities: data,
                loading: false,
            });
        } catch (err) {
            console.log(err);
        }

    }

    handleActivityPress = (id) => () => {
        this.props.history.push(`/activities/${id}`);
    };

    renderCard = (item, idx) => (
        <ActivityItem
            index={idx}
            key={item.id}
            budget={item.price}
            name={item.name}
            thumbnailUrl={item.thumbnailUrl}
            time={item.timePeriod}
            onPress={this.handleActivityPress(item.id)}
        />
    );

    render() {
        const { activities, loading } = this.state;
        const { filterActivities } = this.props;
        const output = activities.filter((act) => filterActivities.findIndex((ac) => ac === act.id) === -1);

        return (
            <Content>
                {loading ?
                    <Spinner /> :
                    output.length ? output.map(this.renderCard) : <Text style={{ textAlign: 'center', marginTop: 15}}>No recommended activities found!</Text>
                }
            </Content>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    tripId: selectTripId(),
});

export default withRouter(connect(mapStateToProps)(ActivitiesCarousel));

