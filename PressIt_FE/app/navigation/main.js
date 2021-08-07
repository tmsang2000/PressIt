import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@screens/Home';
import Setting from '@screens/Setting';
import Play from '@screens/Play';

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
            <MainStack.Screen name="Setting" component={Setting}/>
            <MainStack.Screen name="Play" component={Play}/>
        </MainStack.Navigator>
    );
  }
}
