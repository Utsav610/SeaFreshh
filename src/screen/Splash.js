import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {Images} from '../constants/Images';
import { FontSize, Fonts } from '../constants/Fonts';
import { resetScreen } from '../navigation/RootNavigation';

export default function Splash() {

  useEffect(()=>{
    setTimeout(()=>{
        resetScreen('Intro')
    },2000)
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{fontSize:FontSize.FS_40 , fontFamily:Fonts.MEDIUM}}>Sea Freshh</Text>
      </View>
      <Image source={Images.splash} style={styles.image} resizeMode="stretch" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
});
