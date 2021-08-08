import React from 'react';
import { View } from 'react-native';
import {useTheme} from '@config';
import styles from "./styles";
import {connect} from 'react-redux';
import {channingActions} from '@utils';
var Spinner = require('react-native-spinkit');

function Loading(props) {
    const { colors } = useTheme();
    const loading = props.loading;

    if (!loading) return null;
    return (
        <View style={styles.loading}>
            <Spinner style={styles.spinner} type="Circle" isVisible={true} size={100} color={colors.primary} />
        </View>
    )
}

export default connect(
    (state) => ({loading: state.application.loading}),
    (dispatch) => channingActions({}, dispatch)
)(Loading);