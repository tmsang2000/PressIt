import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from 'app/navigation/main';
import {StatusBar} from 'react-native';
import {BaseColor} from '@config';

const RootStack = createStackNavigator();

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount = () => {
    StatusBar.setBackgroundColor(BaseColor.orangeColor, true);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Main"
                headerMode="none"
            >
                <RootStack.Screen 
                    name="Main" 
                    component={Main} 
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
  }
}
