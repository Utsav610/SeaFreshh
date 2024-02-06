import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { FontSize , Fonts } from '../constants/Fonts';
import { Colors } from '../constants/Colors';
import { pixelSizeHorizontal } from '../constants/ResponsiveScreen';

const CustomButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: pixelSizeHorizontal(12) ,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical:20
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSize.FS_18,
    letterSpacing: 2.8,
    fontFamily:Fonts.MEDIUM
  },
});

export default CustomButton;
