import React, { Component } from 'react';
import {View, Text,} from 'react-native';
export class App extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello World!
        </Text>
        <World name="Lam Thanh Hoai"></World>
      </View>      
    )
  }
}

class World extends Component {
  render() {
    return (
      <Text>Xin chao, toi ten la {this.props.name}</Text>
    )
}
}