import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import {BaseStyle, useTheme, Images} from '@config';
import styles from './styles';
import {
  Header,
  Icon,
  ChatItem
} from '@components';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import { AuthActions } from '@actions';

export default function Chat(props) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [refreshing] = useState(false);
  const [messenger] = useState([
    {
        id: "0",
        user: "Sankhadeep",
        message: "Its time to build a difference ...",
        image: Images.avata1,
        date: "Dec 11, 2018"
      },
      {
        id: "1",
        user: "Sankhadeep",
        message: "Its time to build a difference ...",
        image: Images.avata2,
        date: "Dec 11, 2018"
      },
      {
        id: "2",
        user: "Sankhadeep",
        message: "Its time to build a difference ...",
        image: Images.avata3,
        date: "Dec 11, 2018"
      },
      {
        id: "3",
        user: "Sankhadeep",
        message: "Its time to build a difference ...",
        image: Images.avata4,
        date: "Dec 11, 2018"
      },
      {
        id: "4",
        user: "Sankhadeep",
        message: "Its time to build a difference ...",
        image: Images.profile1,
        date: "Dec 11, 2018"
      },
      {
        id: "5",
        user: "Sankhadeep",
        message: "Its time to build a difference ...",
        image: Images.profile3,
        date: "Dec 11, 2018"
      }
  ]);

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header 
        title={t("chat")}
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
        refreshControl={
            <RefreshControl
                colors={[colors.primary]}
                tintColor={colors.primary}
                refreshing={refreshing}
                onRefresh={() => {}}
            />
        }
        data={messenger}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
            <ChatItem
              onPress={() => {
                navigation.navigate('Messages');
              }}
              image={item.image}
              txtLeftTitle={item.user}
              txtContent={item.message}
              txtRight={item.date}
            />
        )}
      />
    </SafeAreaView>
  );
}
