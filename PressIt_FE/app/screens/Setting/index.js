import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {BaseStyle, BaseColor, useTheme} from '@config';
import styles from './styles';
import {
  Header,
  Button,
  Icon
} from '@components';
import {useTranslation} from 'react-i18next';

export default function Setting(props) {
  const {t} = useTranslation();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header 
        title={t("setting")}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={colors.primary}
            />
          )
        }}
        onPressLeft={() => {props.navigation.goBack()}}
      />
      <View style={styles.contain}>
        <Button 
          style={{width: '50%', marginTop: 20}}
          onPress={() => {props.navigation.navigate("Language")}}
        >
          {t('language')}
        </Button>
        <Button 
          style={{width: '50%', marginTop: 20}}
          onPress={() => {props.navigation.navigate("DarkMode")}}
        >
          {t('dark_mode')}
        </Button>
        <Button 
          style={{width: '50%', marginTop: 20}}
          onPress={() => {props.navigation.navigate("Color")}}
        >
          {t('color')}
        </Button>
      </View>
    </SafeAreaView>
  );
}
