import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {BaseStyle, BaseColor} from '@config';
import styles from './styles';
import {
  Header,
  Button,
  Icon
} from '@components';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
        <Header 
          title="Setting"
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
          <Button style={{width: '50%'}}>
            Level
          </Button>
          <Button style={{width: '50%', marginTop: 20}}>
            Language
          </Button>
          <Button style={{width: '50%', marginTop: 20}}>
            Dark mode
          </Button>
          <Button style={{width: '50%', marginTop: 20}}>
            Color
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
