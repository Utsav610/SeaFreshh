import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderView from '../../components/HeaderView';
import BasicCard from '../../components/BasicCard';
import {Colors} from '../../constants/Colors';
import {pixelSizeHorizontal} from '../../constants/ResponsiveScreen';
import {Images} from '../../constants/Images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontSize, Fonts} from '../../constants/Fonts';

export default function Cart() {
  return (
    <>
      <HeaderView title="Cart" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingHorizontal: pixelSizeHorizontal(20),
        }}>
        <BasicCard style={{marginVertical: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.Item1}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
            <View style={{flex: 1, marginLeft: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  alignItems:'center'
                }}>
                <Text style={{fontFamily:Fonts.BOLD , fontSize:FontSize.FS_14 , color:Colors.black}}>Salomn Filter</Text>
                <Icon name={'close'} size={25} color={Colors.primary} />
              </View>
              <Text style={{fontFamily:Fonts.MEDIUM ,fontSize:FontSize.FS_15, marginVertical:6 }}>Lorem ipsum dolor sit amet.</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  
                }}>
                <Text>$120/500g</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: Colors.primaryLight,
                    padding: 8,
                    borderRadius:5
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 8,
                      backgroundColor: Colors.white,
                      elevation: 5,
                      borderRadius: 5,
                    }}>
                    <Icon name={'minus'} size={20} color={Colors.black} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginHorizontal: pixelSizeHorizontal(12),
                      fontFamily: Fonts.SEMIBOLD,
                      fontSize: FontSize.FS_16,
                      color: Colors.black,
                    }}>
                    1
                  </Text>
                  <TouchableOpacity
                    style={{
                      padding: 8,
                      backgroundColor: Colors.primary,
                      elevation: 5,
                      borderRadius: 5,
                    }}>
                    <Icon name={'plus'} size={20} color={Colors.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </BasicCard>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
