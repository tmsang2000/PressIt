import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {
  Header,
  Button,
  Icon
} from '@components';

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
        <Header 
          title="Play"
          renderLeft={() => {
            return (
              <Icon
                name="arrow-left"
                size={20}
                color={BaseColor.orangeColor}
              />
            )
          }}
          onPressLeft={() => {this.props.navigation.goBack()}}
        />
        <View style={styles.contain}>

        </View>
      </SafeAreaView>
    );
  }
}
