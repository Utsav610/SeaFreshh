//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { widthPixel } from '../constants/ResponsiveScreen';

// create a component
const IconButton = ({children, additionalStyle={}, backgroundColor = Colors.white, onPress = {}}) => {
	return (
		<TouchableOpacity style={[styles.container,{...additionalStyle}]}
			onPress={onPress}>
			{children}
		</TouchableOpacity>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		// padding: pixelSizeHorizontal(10),
		borderRadius: widthPixel(10),
	},
});

//make this component available to the app
export default IconButton;
