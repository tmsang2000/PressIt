import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AppStack{
  static kPrivacy = 'privacy'

  static init() {
      AsyncStorage.getAllKeys(keys => {
          keys.map(k => 
            AsyncStorage.getItem(k).then(value => {

            })  
          )
      })
  }

  static setPrivacy(value) {
      this.abc.privacy = value;
      AsyncStorage.setItem('privacy', JSON.stringify(content));
  }
}
