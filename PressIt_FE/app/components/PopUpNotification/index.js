import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {useTheme, BaseColor} from '@config';
import {Text, Icon} from '@components';
import styles from './styles';
import {channingActions} from '@utils';
import {ApplicationActions} from '@actions';

function PopUpNotification(props) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {data} = props;

  const renderNoti = (noti, id, status) => {
      setTimeout(() => {dispatch(ApplicationActions.onHidePopupNotification(id))}, 5000);
      return (
        <View key={id}>
            <TouchableOpacity 
                style={{
                    margin: 10, 
                    backgroundColor: colors.card,
                    borderWidth: 3,
                    borderColor: status == null ? BaseColor.yellowColor : status == true ? BaseColor.greenColor : BaseColor.orangeColor,
                    borderRadius: 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} 
                
                // onPress={() => dispatch(ApplicationActions.onHidePopupNotification(id))}
            >
                <View style={styles.icon}>
                    <Icon 
                        name={status == null ? 'exclamation-triangle' : status == true ? 'check-circle' : 'exclamation-circle'} 
                        size={14} 
                        color={status == null ? BaseColor.yellowColor : status == true ? BaseColor.greenColor : BaseColor.orangeColor} 
                        solid
                    />
                </View>
                <View style={[styles.item]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text body2 style={{marginHorizontal: 8}}>
                            {noti.content}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      )
  }

  if (data.length == 0) return null;
  return (
    <View style={styles.notification}>

        {data.map((item) => renderNoti(item, item.id, item.status))}
            
    </View>
  );
}

export default connect(
    (state) => ({data: state.notification.data}),
    (dispatch) => channingActions({}, dispatch)
)(PopUpNotification);
