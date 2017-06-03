import React from 'react';
import { List, View } from 'native-base';
import ItineraryItem from '../../components/trips/ItineraryItem'
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { selectConfirmedActivities } from '../../selectors';
import { setConfirmedActivities } from '../../actions/trips';

class ItineraryTab extends React.Component {

    componentDidMount() {

    }

    handleItemPress = (id) => () => {
        this.props.history.push(`/activities/${id}`)
    };

    render() {
        const { activities } = this.props;

        return (
            <View>
                <List>
                    {activities.map((activity) =>
                        <ItineraryItem
                            key={activity.id}
                            onPress={this.handleItemPress(activity.id)}
                            name={activity.name}
                            time={activity.timePeriod}
                        />
                    )}
                </List>
            </View>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    activities: selectConfirmedActivities(),
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setConfirmedActivities,
    }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItineraryTab));
