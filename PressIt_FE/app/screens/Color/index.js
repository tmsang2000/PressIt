import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeSupport} from '@config';
import {BaseStyle, useTheme} from '@config';
import {Header, Icon, Text, Button} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';

export default function Color({navigation}) {
  const themeStorage = useSelector(state => state.application.theme);
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const [themeSupport, setTheme] = useState(ThemeSupport);

  useEffect(() => {
    setTheme(
      themeSupport.map(item => {
        return {
          ...item,
          selected: item.theme == themeStorage,
        };
      }),
    );
  }, []);

  const onSelect = selected => {
    setTheme(
      themeSupport.map(item => {
        return {
          ...item,
          selected: item.theme == selected.theme,
        };
      }),
    );
  };

  const onChangeTheme = () => {
    const list = themeSupport.filter(item => item.selected);
    if (list.length > 0) {
      dispatch(ApplicationActions.onChangeTheme(list[0].theme));
      StatusBar.setBackgroundColor(list[0].light.colors.primary, true);
    }
    dispatch(
      ApplicationActions.onShowPopupNotification(
        t('change_theme_successfully'),
        true,
        () => {},
      ),
    );
    navigation.goBack();
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={[
          styles.profileItem,
          {borderBottomColor: colors.border, borderBottomWidth: 1},
        ]}
        onPress={() => onSelect(item)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 16,
              height: 16,
              backgroundColor: item.light.colors.primary,
            }}
          />
          <Text body1 style={{marginHorizontal: 8}}>
            {t(item.theme)}
          </Text>
        </View>

        {item.selected && (
          <Icon name="check" size={18} color={colors.primary} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('color')}
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
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        contentContainerStyle={styles.contain}
        data={themeSupport}
        keyExtractor={(item, index) => item.theme}
        renderItem={({item}) => renderItem(item)}
      />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <Button full onPress={onChangeTheme}>
          {t('apply')}
        </Button>
      </View>
    </SafeAreaView>
  );
}
