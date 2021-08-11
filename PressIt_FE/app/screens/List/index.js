import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import {BaseStyle, useTheme} from '@config';
import styles from './styles';
import {
  Header,
  Button,
  Icon,
  ListItem
} from '@components';
import {useTranslation} from 'react-i18next';

export default function List(props) {
  const {t} = useTranslation();
  const { colors } = useTheme();
  const listRoom = [
      {
        id: '#09q3asnc',
        name: 'Game LOL',
        createdAt: Date.now(),
      },
      {
        id: 'as1#1dffa',
        name: 'Study',
        createdAt: Date.now() - 10000,
      },
      {
        id: 'ai9#asnc2',
        name: 'Relax Music',
        createdAt: Date.now() - 100
      }
  ]

  const fetchGet = () => {
      fetch({
          method: 'GET',

      })
  }

  const renderItem = item => {
      return (
          <ListItem
            style={{marginTop: 10}}
            name={item.name}
            createdAt={item.createdAt}
            onPress={() => {}}
          />
      )
  }

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
        <Header 
            title={t("list")}
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
        <FlatList
            style={{paddingHorizontal: 20, marginTop: 10}}
            data={listRoom}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => renderItem(item)}
        />
    </SafeAreaView>
  )
}
