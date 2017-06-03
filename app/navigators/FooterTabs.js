import React from 'react';

import { NavigationActions } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text,  } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRoute } from '../selectors/routes';

class WithFooterTabs extends React.Component {

    handleTabClick = (tabRoute) => () => {
        this.props.goTo(tabRoute);
    };

    render() {
        const { route: { routeName } } = this.props;

        return (
            <Footer>
                <FooterTab>
                    <Button
                        onPress={this.handleTabClick('Trips')}
                        active={routeName === 'Trips'}
                        vertical
                    >
                        <Icon name="plane"/>
                        <Text>Trips</Text>
                    </Button>
                    <Button
                        onPress={this.handleTabClick('Notifications')}
                        active={routeName === 'Notifications'}
                        vertical
                    >
                        <Icon name="md-notifications"/>
                        <Text>Notifications</Text>
                    </Button>
                    <Button
                        onPress={this.handleTabClick('MyProfile')}
                        active={routeName === 'MyProfile'}
                        vertical
                    >
                        <Icon name="person"/>
                        <Text>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    goTo: (route) => dispatch(NavigationActions.navigate({
        routeName: route,
    }))
});
const mapStateToProps = createStructuredSelector({
    route: selectRoute(),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithFooterTabs);
