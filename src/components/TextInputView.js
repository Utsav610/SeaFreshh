import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {pixelSizeHorizontal, widthPixel} from '../constants/ResponsiveScreen';
import {Colors} from '../constants/Colors';
import {FontSize, Fonts} from '../constants/Fonts';

const TextInputView = ({
  value = '',
  imageSource,
  onChangeText,
  placeholder = '',
  editable = true,
  containerStyle = {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
    props?.onFocusEffect && props?.onFocusEffect();
  };

  const onBlur = () => {
    setIsFocused(false);
    props?.onBlurEffect && props?.onBlurEffect();
  };

  return (
    <>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.white,
            borderRadius: 8,
            paddingHorizontal: 10,
            borderWidth: 1.5,
            borderColor: isFocused ? Colors.primary : Colors.offWhite,
          },
          {...containerStyle},
        ]}>
        {imageSource && (
          <Image
            source={imageSource}
            style={{width: widthPixel(20), height: widthPixel(20)}}
            resizeMode={'contain'}
          />
        )}

        <TextInput
          returnKeyType="none"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.black}
          editable={editable}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            flex: 1,
            marginLeft: pixelSizeHorizontal(10),
            fontFamily: Fonts.MEDIUM,
            fontSize: FontSize.FS_16,
            color: Colors.black,
            paddingVertical: pixelSizeHorizontal(10),
          }}
          {...props}
        />
      </View>
      <Text style={styles.errorText}>{props.error}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.FS_13,
    color: Colors.error,
    marginLeft: pixelSizeHorizontal(20),
  },
});

export default TextInputView;
