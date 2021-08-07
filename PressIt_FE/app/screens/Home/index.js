import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {BaseStyle} from '@config';
import styles from './styles';
import {
  Header,
  Button
} from '@components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
        <Header title="Press It"/>
        <View style={styles.contain}>
          <Button style={{width: '50%'}}>
            Play
          </Button>
          <Button style={{width: '50%', marginTop: 20}}>
            Guide
          </Button>
          <Button style={{width: '50%', marginTop: 20}}>
            Setting
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
