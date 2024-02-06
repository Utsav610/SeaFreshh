import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputView from '../components/TextInputView';
import {Images} from '../constants/Images';
import {FontSize, Fonts} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../constants/ResponsiveScreen';
import CustomButton from '../components/CustomButton';
import {navigate} from '../navigation/RootNavigation';

const MobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, '* Please enter 10 digit mobile number')
    .required('* Please enter mobile number'),
});

const loginData = value => {
  // setTxtMobile(value.mobile)
  navigate('OtpView')
  // Api_Check_mobile(true, value)
};

export default function Login() {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: Colors.white}}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Formik
          initialValues={{
            mobile: '',
          }}
          validationSchema={MobileSchema}
          onSubmit={values => {
            loginData(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: FontSize.FS_35,
                  fontFamily: Fonts.BOLD,
                  color: Colors.black,
                  marginBottom: pixelSizeVertical(30),
                }}>
                Login
              </Text>
              <Text
                style={{
                  fontSize: FontSize.FS_15,
                  fontFamily: Fonts.MEDIUM,
                  marginBottom: 10,
                }}>
                Mobile Number
              </Text>
              <TextInputView
                containerStyle={{}}
                onChangeText={handleChange('mobile')}
                onBlur={handleBlur('mobile')}
                value={values.mobile}
                placeholder={'Mobile Number'}
                keyboardType={'number-pad'}
                maxLength={10}
                error={errors.mobile && touched.mobile && errors.mobile}
              />
              <CustomButton
                title={'SEND OTP'}
                onPress={handleSubmit}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: pixelSizeVertical(20),
                }}>
                <Text
                  style={{fontSize: FontSize.FS_15, fontFamily: Fonts.MEDIUM}}>
                  Did Not Have Account ?
                </Text>
                <TouchableOpacity onPress={() => navigate('Register')}>
                  <Text
                    style={{
                      fontSize: FontSize.FS_15,
                      fontFamily: Fonts.MEDIUM,
                      color: Colors.primary,
                      marginLeft: pixelSizeHorizontal(5),
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        <Image style={{width: '100%'}} source={Images.Auth} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
