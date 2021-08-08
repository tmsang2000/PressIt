import React, {useEffect} from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import {Text} from '@components';
import styles from "./styles";
import PropTypes from 'prop-types';
import {useDarkMode} from 'react-native-dark-mode';
import {useSelector} from 'react-redux';

export default function Header(props) {
    const {
        style,
        styleLeft,
        styleCenter,
        styleRight,
        onPressLeft,
        onPressRight,
        renderLeft,
        renderRight,
        title,
        barStyle,
    } = props;
    const isDarkMode = useDarkMode();
    const forceDark = useSelector(state => state.application.force_dark);

    useEffect(() => {
        let option = isDarkMode ? 'light-content' : 'dark-content';
        if (forceDark) {
          option = 'light-content';
        }
        if (forceDark == false) {
          option = 'dark-content';
        }
        if (barStyle) {
          option = barStyle;
        }
        StatusBar.setBarStyle(option, true);
    }, [forceDark, isDarkMode]);

    return (
      <View style={[styles.contain, style]}>

        <View style={{flex: 1}}>
            <TouchableOpacity
                style={[styles.contentLeft, styleLeft]}
                onPress={onPressLeft}
            >
                {renderLeft()}
            </TouchableOpacity>
        </View>

        <View style={[styles.contentCenter, styleCenter]}>
            <Text headline numberOfLines={1}>
                {title}
            </Text>
        </View>

        <View style={styles.right}>
            <TouchableOpacity
                style={[styles.contentRight, styleRight]}
                onPress={onPressRight}
            >
                {renderRight()}
            </TouchableOpacity>
        </View>

      </View>
    );
}

Header.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func,
    barStyle: PropTypes.string,
};

Header.defaultProps = {
    style: {},
    styleLeft: {},
    styleRight: {},
    styleCenter: {},
    renderLeft: () => {},
    renderRight: () => {},
    onPressRight: () => {},
    onPressLeft: () => {},
    title: 'Title',
    barStyle: '',
}
