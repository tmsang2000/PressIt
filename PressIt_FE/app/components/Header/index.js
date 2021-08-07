import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import PropTypes from 'prop-types';

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
        title
    } = props;

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
            <Text numberOfLines={1}>
                {title}
            </Text>
        </View>

        <View style={{flex: 1}}>
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

Header.PropTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func
};

Header.defaultProps = {
    style: {},
    styleLeft: {},
    styleRight: {},
    styleCenter: {},
    renderLeft: () => {},
    renderRight: () => {},
    onPressRight: () => {},
    onPressLeft: () => {}
}
