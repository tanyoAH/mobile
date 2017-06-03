import { StackNavigator } from 'react-navigation';
import MyProfileScreen from './screens/MyProfile';
import TripsScreen from './screens/Trips';


export default StackNavigator({
    Trips: {
        screen: TripsScreen,
    },
    MyProfile: {
        screen: MyProfileScreen,
    },
});