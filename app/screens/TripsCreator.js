import React from 'react'
import { Container, Content, Button, Icon, Body, Title, Header, Left, Grid, Col, Row, Text } from 'native-base';
import LocationMap from '../components/tripsCreator/LocationMap';
import DatePicker from '../components/tripsCreator/DatePicker';
import BudgetSlider from '../components/tripsCreator/BudgetSlider';

export default class TripsCreatorScreen extends React.Component {

    handlePress = () => {
        this.props.history.goBack();
    };

    handleTripAdd = () => {
        const coordinates = this.map.getValue();
        const startDate = this.startDate.getValue();
        const endDate = this.endDate.getValue();
        const budget = this.budget.getValue();
        if (coordinates && startDate && endDate && budget) {
            this.props.history.push('/');
        }
    };

    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={this.handlePress}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Add Trip</Title>
                    </Body>
                </Header>
                <Content>
                    <LocationMap
                        ref={(ref) => this.map = ref}
                    />
                    <Grid style={{ marginTop: 15 }}>
                        <Row style={{ marginBottom: 15 }}>
                            <Col
                                style={{ alignItems: 'center'}}
                            >
                                <DatePicker
                                    defaultText="Start Date"
                                    ref={(ref) => this.startDate = ref}
                                />
                            </Col>
                            <Col
                                style={{ alignItems: 'center'}}
                            >
                                <DatePicker
                                    defaultText="End Date"
                                    ref={(ref) => this.endDate = ref}
                                />
                            </Col>
                        </Row>
                        <BudgetSlider
                            ref={(ref) => this.budget = ref}
                        />
                        <Row style={{ justifyContent: 'center', flex: 1, marginTop: 15 }}>
                            <Button full success onPress={this.handleTripAdd}>
                                <Text>
                                    Add Trip
                                </Text>
                            </Button>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}
