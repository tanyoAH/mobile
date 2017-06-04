import React from 'react';

import { withRouter } from 'react-router-native';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { connect } from 'react-redux';
import { selectNotifications } from '../../selectors';
import { createStructuredSelector } from 'reselect';

class FooterTabs extends React.Component {

    handleTabClick = (tabRoute) => () => {
        this.props.history.push(tabRoute);
    };

    render() {
        const { location: { pathname }, notifications } = this.props;
        console.log(notifications);

        return (
            <Footer>
                <FooterTab>
                    <Button
                        onPress={this.handleTabClick('/')}
                        active={pathname === '/'}
                        vertical
                    >
                        <Icon name="plane"/>
                        <Text>Trips</Text>
                    </Button>
                    <Button
                        onPress={this.handleTabClick('/notifications')}
                        active={pathname === '/notifications'}
                        vertical
                    >
                        <Icon name="md-notifications"/>
                        <Text>Notifications</Text>
                    </Button>
                    <Button
                        onPress={this.handleTabClick('/myprofile')}
                        active={pathname === '/myprofile'}
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

const mapStateToProps = createStructuredSelector({
    notifications: selectNotifications(),
});

export default withRouter(connect(mapStateToProps)(FooterTabs));