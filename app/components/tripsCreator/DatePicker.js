import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-modal-datetime-picker';
import strftime from 'strftime';
import { View, Button, Icon, Text } from 'native-base';

export default class DatesPicker extends React.Component {

    static propTypes = {
        defaultText: PropTypes.string,
    };

    state = {
        showPicker: false,
        text: this.props.defaultText,
        date: '',
    };

    getValue = () => this.state.date;

    showDatePicker = (shown) => () => {
        this.setState({
            showPicker: shown,
        });
    };

    handleDateConfirm = (date) => {
        this.setState({
            date,
            text: strftime('%d %B', date),
        });
    };

    render() {
        const { text, showPicker } = this.state;

        return (
            <View>
                <Button iconLeft onPress={this.showDatePicker(true)}>
                    <Icon name="md-calendar" />
                    <Text>{text}</Text>
                </Button>
                <DatePicker
                    isVisible={showPicker}
                    onConfirm={this.handleDateConfirm}
                    onCancel={this.showDatePicker(false)}
                />
            </View>
        )
    }
}
