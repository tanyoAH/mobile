import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Card, CardItem } from 'native-base';

export default class SliderEntry extends Component {

    static propTypes = {
        imageUrl: PropTypes.string,
    };

    render () {
        const { imageUrl } = this.props;

        return (
            <Card>
                <CardItem>
                    <Image
                        source={{
                            uri: imageUrl,
                        }}
                    />
                </CardItem>
            </Card>
        )
    }
}