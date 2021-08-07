import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@screens/Home';

const MainStack = createStackNavigator();

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <MainStack.Navigator
            headerMode="none"
            initialRouteName={'Home'}
        >
            <MainStack.Screen name="Home" component={Home}/>
        </MainStack.Navigator>
    );
  }
}
