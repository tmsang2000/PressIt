import React, {useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {BaseStyle, useTheme, BaseSetting} from '@config';
import {Header, Icon, Text} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import * as Utils from '@utils';

export default function Language({navigation}) {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {colors} = useTheme();

  const [loading, setLoading] = useState('');
  const [language, setLanguage] = useState(BaseSetting.languageSupport);
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  const onChange = select => {
    setLanguageSelected(select);
  };

  const saveLanguage = () => {
    if (!loading) {
      setLoading(true);
      const oldLanguage = i18n.language;
      dispatch(ApplicationActions.onChangeLanguage(languageSelected));
      i18n.changeLanguage(languageSelected);

      setTimeout(() => {
        Utils.reloadLocale(oldLanguage, languageSelected);
        dispatch(ApplicationActions.onShowPopupNotification(
          t("change_language_successfully"), 
          true, 
          () => {},
        ));
        navigation.goBack();
      }, 500);
    }
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('language')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        renderRight={() => {
          if (loading) {
            return <ActivityIndicator size="small" color={colors.primary} />;
          } else {
            return (
              <Text headline primaryColor numberOfLines={1}>
                {t('save')}
              </Text>
            );
          }
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={saveLanguage}
      />
      <View style={styles.contain}>
        <FlatList
          contentContainerStyle={{paddingHorizontal: 20}}
          data={language}
          keyExtractor={item => item}
          renderItem={({item}) => {
            const selected = item == languageSelected;
            return (
              <TouchableOpacity
                style={[styles.item, {borderBottomColor: colors.border}]}
                onPress={() => onChange(item)}>
                <Text
                  body1
                  style={
                    selected
                      ? {
                          color: colors.primary,
                        }
                      : {}
                  }>
                  {Utils.languageFromCode(item)}
                </Text>
                {selected && (
                  <Icon name="check" size={14} color={colors.primary} />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
