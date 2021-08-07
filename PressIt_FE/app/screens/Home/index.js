import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {BaseStyle} from '@config';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
            
        </SafeAreaView>
    );
  }
}
