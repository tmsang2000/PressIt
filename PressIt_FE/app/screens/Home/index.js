import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {BaseStyle} from '@config';
import styles from './styles';
import {
  Header,
  Button
} from '@components';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import { AuthActions } from '@actions';

export default function Home(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();

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
          onPress={() => {props.navigation.navigate("List")}} 
          style={{width: '50%', marginTop: 20}}
        >
          {t('chat_group')}
        </Button>
        <Button 
          onPress={() => {props.navigation.navigate("Setting")}}
          style={{width: '50%', marginTop: 20}}
        >
          {t('setting')}
        </Button>
        <Button 
          onPress={() => {
            dispatch(AuthActions.onLogOut())
            .then(res => {
              console.log("Logout successfully")
            })
            .catch(err => {
              console.log("Logout failed")
            })
          }}
          style={{width: '50%', marginTop: 20}}
        >
          {t('log_out')}
        </Button>
      </View>
    </SafeAreaView>
  );
}
