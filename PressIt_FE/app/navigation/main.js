import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Home from '@screens/Home';
import Setting from '@screens/Setting';
import Play from '@screens/Play';
import Color from '@screens/Color';
import Language from '@screens/Language';
import List from '@screens/List';
import Login from '@screens/Login';

const MainStack = createStackNavigator();

export default function Main() {
  const auth = useSelector((state) => state.auth);
  const login = auth.login.success;

  return (
      <MainStack.Navigator
          headerMode="none"
          initialRouteName={login ? 'Home' : 'Login'}
      >
        {
          login ? (
            <>
              <MainStack.Screen name="Home" component={Home}/>
              <MainStack.Screen name="Setting" component={Setting}/>
              <MainStack.Screen name="Play" component={Play}/>
              <MainStack.Screen name="Color" component={Color}/>
              <MainStack.Screen name="Language" component={Language}/>
              <MainStack.Screen name="List" component={List}/>
            </>
          ) : (
            <>
              <MainStack.Screen name="Login" component={Login}/>
            </>
          )
        }
      </MainStack.Navigator>
  );
}
