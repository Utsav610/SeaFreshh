import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../components/CustomButton';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../constants/ResponsiveScreen';
import {FontSize, Fonts} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import GlobalStyles from '../style/GlobalStyle';
import { navigate } from '../navigation/RootNavigation';

export default function OtpView() {
  const input = useRef(null);
  const [otp, setOtp] = useState('');
  const [isResendCode, setIsResendCode] = useState(true);

  const handleTextChange = text => {
    setOtp(text);
  };

  const btnResendTap = () => {
    setOptcode('');
  };

  const clearTimer = () => {
    for (var i = 0; i < 10000; i++) {
      clearInterval(i);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          paddingHorizontal: pixelSizeHorizontal(20),
          justifyContent: 'center',
          marginTop: '45%',
        }}>
        <Text style={[GlobalStyles.headerText]}>OTP Verification</Text>
        <Text
          style={[
            GlobalStyles.subHeaderText,
            {marginVertical: pixelSizeVertical(10)},
          ]}>
          An OTP code has been{'\n'}sent to
        </Text>
        <OTPTextView
          ref={input}
          handleTextChange={handleTextChange}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          tintColor={Colors.primary}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.MEDIUM,
              fontSize: FontSize.FS_16,
              color: Colors.black05,
            }}>
            Did not Receive OTP ?
          </Text>
          {isResendCode ? (
            <TouchableOpacity
              onPress={() => {
                btnResendTap();
              }}>
              <Text style={styles.registerText}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.registerText}>Resend OTP in 00:{count}</Text>
          )}
        </View>
        <CustomButton
          title={'VERIFY OTP'}
          onPress={() => {
            console.log('Verify OTP', otp);
            navigate('Dashboard');
          }}
        />
      </View>
      <View>
        <Image style={{width: '100%'}} source={Images.Auth} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 25,
    justifyContent: 'space-evenly',
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  registerText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.FS_16,
    color: Colors.black,
    marginLeft: 5,
  },
});
