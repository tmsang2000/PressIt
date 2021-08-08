import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from 'app/navigation/main';
import {StatusBar} from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useTheme, BaseSetting} from '@config';
import {DarkModeProvider, useDarkMode} from 'react-native-dark-mode';

import DarkMode from '@screens/DarkMode';

const RootStack = createStackNavigator();

export default function Navigator() {
  const storeLanguage = useSelector(state => state.application.language);
  const {theme, colors} = useTheme();
  const isDarkMode = useDarkMode();

  const forFade = ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  i18n.use(initReactI18next).init({
    resources: BaseSetting.resourcesLanguage,
    lng: storeLanguage ?? BaseSetting.defaultLanguage,
    fallbackLng: BaseSetting.defaultLanguage,
  });

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.primary, true);
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
  }, []);

  return (
    <DarkModeProvider>
      <NavigationContainer theme={theme}>
          <RootStack.Navigator
            mode="modal"
            initialRouteName="Main"
            headerMode="none"
          >
            <RootStack.Screen 
                name="Main" 
                component={Main} 
            />
            <RootStack.Screen
              name="DarkMode"
              component={DarkMode}
              gestureEnabled={false}
              options={{
                cardStyleInterpolator: forFade,
                cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
              }}
            />
          </RootStack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
}
