import React, {useState} from 'react';
import { 
    View, 
    SafeAreaView, 
    TextInput, 
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import {BaseStyle, Images, useTheme, BaseColor} from '@config';
import styles from './styles';
import {
  Header,
  Button,
  Text,
  Image
} from '@components';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import { AuthActions } from '@actions';

export default function Login(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 70,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    dispatch(AuthActions.onLogin({email: email, password: password}))
    .then(res => {
        console.log('Login successfully')
        props.navigation.navigate('Home')
    })
    .catch(err => {
        console.log('Login failed')
    })
  }

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header 
        title={t("login")}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'} 
        keyboardVerticalOffset={offsetKeyboard}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.contain}>
            <View>
                <Text title3 semibold>
                    {t('welcome_back_to')}
                </Text>
            </View>
            <View style={{height: 60, justifyContent: 'center'}}>
                <Text title1 bold>
                    Logo Name
                </Text>
            </View>
            <View style={{marginVertical: 20}}>
                <Image source={Images.event4} style={styles.img}/>
            </View>
            <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                <Text subhead>
                    {t('please_enter_your_account_information')}
                </Text>
                <View style={[styles.textInput, {backgroundColor: colors.card, borderColor: BaseColor.kashmir}]}>
                    <TextInput 
                        style={{fontSize: 16, color: colors.text}}
                        placeholder={t('email')}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={[styles.textInput, {backgroundColor: colors.card, borderColor: BaseColor.kashmir}]}>
                    <TextInput 
                        style={{fontSize: 16, color: colors.text}}
                        placeholder={t('password')}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button 
                    onPress={() => {login()}}
                    style={{width: '80%', borderRadius: 100, marginTop: 60}}
                >
                    {t('continue')}
                </Button>
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
