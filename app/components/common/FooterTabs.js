import React from 'react';

import { withRouter } from 'react-router-native';
import { Footer, FooterTab, Button, Icon, Text,  } from 'native-base';

class FooterTabs extends React.Component {

    handleTabClick = (tabRoute) => () => {
        this.props.history.push(tabRoute);
    };

    render() {
        const { location: { pathname } } = this.props;

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


export default withRouter(FooterTabs);