import React, { Component } from 'react';
import { Blink } from './Blink';
import {
  View, Text, 
} from 'react-native';

export class App extends Component {
  render() {
    return (
      <View>
        <Blink text="Day la Text Blink"></Blink>
      </View>
    )
  }
}