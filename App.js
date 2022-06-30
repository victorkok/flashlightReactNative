import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
const App = ()=>{
  const toggle = false; //false

  return <View style={toggle ? style.containerLight : style.container} >
    <TouchableOpacity onPress={() => {}}>
      <Image
      style={ toggle ? style.lightningOn : style.lightningOff} 
      source={toggle 
        ? require('./assets/icons/eco-light-off.png')
        : require('./assets/icons/eco-light-on.png')
      } 
      />
      <Image
      style={style.dioLogo} 
      source={toggle 
        ? require('./assets/icons/logo-dio-white.png')
        : require('./assets/icons/logo-dio.png')
      } 
      />
    </TouchableOpacity>
  </View>;
};

export default App

const astyle = StyleSheet.create({
  constainer:{
    flex:1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  constainerLight:{
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningOn:{
    resizeMode: 'contain',
    alignSelf:'center',
    width: 150,
    height:150,
  },
  lightningOff:{
    resizeMode: 'contain',
    alignSelf:'center',
    tintColor:'white',
    width: 150,
    height:150,
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf:'center',
    width: 250,
    height:250,
  },
});