import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export default function Index(props) {
    const {
        style,
        ...rest
    } = props

    return (
        <Icon
            style={StyleSheet.flatten([style])}
            {...rest}
        />
    )
}

Index.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

Index.defaultProps = {
    style: {}
}