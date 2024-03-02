import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Divider({ style, type = 'solid' }) {
  const dividerStyles = [
    styles.divider,
    style,
    {borderBottomWidth: type === 'solid' ? 1 : 0.5, borderStyle: type},
  ];
  return <View style={dividerStyles} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'gray',
  },
});
