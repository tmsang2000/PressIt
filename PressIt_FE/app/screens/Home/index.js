import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {BaseStyle} from '@config';
import styles from './styles';
import {
  Header,
  Button
} from '@components';
import {useTranslation} from 'react-i18next';

export default function Home(props) {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header 
        title={t("press_it")}
      />
      <View style={styles.contain}>
        <Button
          onPress={() => {props.navigation.navigate("Play")}} 
          style={{width: '50%'}}
        >
          {t('play')}
        </Button>
        <Button 
          onPress={() => {props.navigation.navigate("Setting")}}
          style={{width: '50%', marginTop: 20}}
        >
          {t('Setting')}
        </Button>
      </View>
    </SafeAreaView>
  );
}
