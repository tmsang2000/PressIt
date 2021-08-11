import React, { useState } from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon} from '@components';
import PropTypes from 'prop-types';
import styles from './styles';
import {useTheme} from '@config';
import {useTranslation} from 'react-i18next';
import * as Utils from '@utils';
import List from '../../screens/List';

export default function ListItem(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {style, name, createdAt, onPress} = props;

  const [iconPress, setIconPress] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.contain, {shadowColor: colors.border}, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      <View
        style={[
          styles.nameContent,
          {
            borderBottomColor: colors.card,
            backgroundColor: colors.primaryLight,
          },
        ]}
      >
        <Text body2 whiteColor semibold>
          {t('chat_room')}
        </Text>
        <Icon
          name="ellipsis-h"
          size={20}
          color={colors.card}
          onPress={() => {setIconPress(!iconPress)}}
        />
      </View>
      <View
        style={[styles.mainContent, {backgroundColor: colors.primaryLight, zIndex: 10}]}>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text body1 whiteColor semibold numberOfLines={1}>
            {name}
          </Text>
        </View>
      </View>
      <View style={[styles.validContent, {backgroundColor: colors.card}]}>
        <Text overline semibold>
          {t('created_at') + ': '} {Utils.formatDate(createdAt)}
        </Text>
      </View>
      {iconPress ? (
        <View style={{backgroundColor: colors.card, width: 80, position: 'absolute', top: 12, right: 36, zIndex: 100}}>
          <View style={{alignItems: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: colors.text}}>
            <Text caption2 semibold>
              {t('edit')}
            </Text>
          </View>
          <View style={{alignItems: 'center', padding: 5}}>
            <Text caption2 semibold>
              {t('remove')}
            </Text>
          </View>
        </View>
      ) : null}
      
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  createdAt: PropTypes.number,
  onPress: PropTypes.func,
};

ListItem.defaultProps = {
  style: {},
  name: '',
  createdAt: 0,
  onPress: () => {},
};
