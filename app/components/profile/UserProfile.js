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
                    <Card style={styles.interestsCard}>
                        <CardItem>
                          <Body style={{alignItems: 'center'}}>
                            <Text style={styles.nameText}>{this.props.name}</Text>                            
                            <View style={{flexDirection: 'row'}}>
                                <View><Text style={styles.detailText}>{`${this.props.age}, `}</Text></View>
                                <View><Icon style={styles.detailIcon} name='pin'/></View>
                                <View><Text style={styles.detailText}>{this.props.from}</Text></View>
                            </View>
                            <Text style={styles.aboutText}>{`"${this.props.about}"`}</Text>                            
                          </Body>
                        </CardItem>
                        <CardItem>
                          <Body>
                            <View style={{alignItems: 'flex-start'}}>
                                <Text>My Interests</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                                {interests}
                            </View>
                          </Body>
                        </CardItem>
                    </Card>
                    <View style={{position: 'absolute',  left: 0, right: 0, top: 6, justifyContent: 'center', alignItems: 'center', elevation: 999}}>
                        <Image source={require('../../img/kris.jpg')} style={styles.image}/>                        
                    </View>                                      
                </View>
            </View>
        )
    }
}

var styles = {
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
    marginTop: 20,
    borderWidth: 0,
    borderColor: '#e5e8ff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 8,
    shadowOpacity: 1.0
  },
  container : {
      alignItems : 'center',
      flexDirection:'column'
  },
  nameText: {
      fontSize: 24,
      fontWeight : 'bold',
      marginTop: 30
  },
  detailText: {
      fontSize: 18,
      marginTop: 6,
      color: '#888888'
  },
  aboutText: {
      fontSize: 20,
      marginTop: 20,
      color: '#aaaaaa',
      fontStyle: 'italic'
  },
  detailIcon: {
      fontSize: 18,
      marginTop: 8,
      marginRight: 4,
      marginLeft: 4,
      color: '#888888'
  },
  intrestsText: {
      fontSize: 30,
      fontWeight : 'bold',
      marginTop: 10
  },
  interestsCard: {
      width: 320,
      marginTop: 90,
      zIndex: 0,
      overflow: 'visible',

  }
}

export default UserProfile;