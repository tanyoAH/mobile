import React, {Component} from 'react';
import {Image} from 'react-native';

import { Icon, Fab, Button, Content, View, Text, Badge, Card, CardItem, Body} from 'native-base';
import { withRouter } from 'react-router-native'

class UserProfile extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        // Get the interests into an array
        let interests = this.props.interests.map((interest) => {
            return (
                <View style={{marginRight: 8, marginTop: 8}}>
                    <Badge primary>
                        <Text>{interest}</Text>
                    </Badge>
                </View>
            )
        })
        // Add the final + sign
        interests.push(
            <View>
                <Badge success style={{width : 40, marginTop: 8}}>
                    <Text>+</Text>
                </Badge>
            </View>
        )
        return (
            <View>
                <View style={styles.container}>
                    <Image source={require('../../img/kris.jpg')} style={styles.image}/>
                    <Text style={styles.nameText}>{this.props.name}</Text>
                    <Text style={styles.emailText}>{this.props.email}</Text>

                    <Card style={styles.interestsCard}>
                        <CardItem header>
                            <Text>My Interests</Text>
                        </CardItem>
                        <CardItem>
                          <Body>
                            <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                                {interests}
                            </View>
                          </Body>
                        </CardItem>
                    </Card>
                </View>
            </View>
        )
    }
}

var styles = {
  image: {
    height: 200,
    borderRadius: 100,
    width: 200,
    marginTop: 20,
    borderWidth: 0,
    borderColor: '#e5e8ff'
  },
  container : {
      alignItems : 'center'
  },
  nameText: {
      fontSize: 30,
      fontWeight : 'bold',
      marginTop: 10
  },
  emailText: {
      fontSize: 16,
      color: '#888888'
  },
  intrestsText: {
      fontSize: 30,
      fontWeight : 'bold',
      marginTop: 10
  },
  interestsCard: {
      width: 320,
      marginTop: 20
  }
}

export default UserProfile;