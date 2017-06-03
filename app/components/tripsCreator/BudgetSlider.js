import React from 'react';
import { Row, Item, Input, Text, Icon } from 'native-base';

export default class BudgetSlider extends React.Component {

    state = {
         budget: null,
    };

    getValue = () => this.state.budget;

    handleBudgetChange = (text) => {
        this.setState({
            budget: parseInt(text, 10),
        })
    };

    render() {
        const { budget } = this.state;

        return (
            <Row style={{
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'center',
            }}>
                <Item style={{ width: '50%' }}>
                    <Icon active name='md-cash' />
                    <Input
                        keyboardType="numeric"
                        placeholder='Budget Per Hour'
                        onChangeText={this.handleBudgetChange}
                        value={budget}
                    />
                </Item>
                {/*<Slider*/}
                    {/*style={{ zIndex: 10}}*/}
                    {/*value={budget}*/}
                    {/*minimumValue={0}*/}
                    {/*maximumValue={500}*/}
                    {/*step={10}*/}
                {/*/>*/}
            </Row>
        );
    }
}