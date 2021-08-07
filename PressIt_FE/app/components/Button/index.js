import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { BaseColor } from "@config";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./styles";

export default function Button(props) {
    const {
        style,
        styleText,
        icon,
        outline,
        full,
        round,
        loading,
        children,
        disable,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            style={StyleSheet.flatten([
                styles.default,
                {backgroundColor: BaseColor.orangeColor},
                outline && [
                    styles.outline,
                    { backgroundColor: BaseColor.orangeColor, borderColor: BaseColor.orangeColor }
                ],
                full && styles.full,
                round && styles.round,
                style
            ])}
            activeOpacity={0.9}
        >

            {icon ? icon : null}

            <Text
                style={StyleSheet.flatten([
                    styles.textDefault,
                    outline && { color: BaseColor.whiteColor },
                    styleText
                ])}
                numberOfLines={1}
            >
                {children || "Button"}
            </Text>

            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={BaseColor.whiteColor}
                    style={{ paddingLeft: 5 }}
                />
            ) : null}

        </TouchableOpacity>
    );
}

Button.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.node,
    outline: PropTypes.bool,
    full: PropTypes.bool,
    round: PropTypes.bool,
    loading: PropTypes.bool,
};

Button.defaultProps = {
    style: {},
    icon: null,
    outline: false,
    full: false,
    round: false,
    loading: false
};
