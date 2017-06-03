import React from 'react';

import { Footer, FooterTab, Button, Icon, Text,  } from 'native-base';
import { connect } from 'react-redux';

export default class WithFooterTabs extends React.Component {
    render() {
        console.log(this.props);

        return (
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="plane"/>
                        <Text>Trips</Text>
                    </Button>
                    <Button
                        badge
                        vertical
                    >
                        <Icon name="md-notifications"/>
                        <Text>Notifications</Text>
                    </Button>
                    <Button>
                        <Icon name="person"/>
                        <Text>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}