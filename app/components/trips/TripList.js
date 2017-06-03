import React from 'react';
import TripItem from './TripItem';
import { View } from 'native-base';

class TripList extends React.Component {

    render() {
        return (
            <View>
                <TripItem
                    imageUrl="http://www.asciify.net/ascii/thumb/4454/asdasd.png"
                    startDate="June 1"
                    endDate="June 2"
                    hourlyBudget={100}
                    location="Hong Kong"
                />
            </View>
        )
    }

}

export default TripList;
