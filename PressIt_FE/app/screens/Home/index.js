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
        <Header 
          title="Press It"
        />
        <View style={styles.contain}>
          <Button
            onPress={() => {this.props.navigation.navigate("Play")}} 
            style={{width: '50%'}}
          >
            Play
          </Button>
          <Button 
            onPress={() => {this.props.navigation.navigate("Setting")}}
            style={{width: '50%', marginTop: 20}}
          >
            Setting
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
