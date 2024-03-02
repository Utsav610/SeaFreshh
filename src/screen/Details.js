import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderView from '../components/HeaderView';
import {banner} from '../DummyData/Data';
import {SCREEN_WIDTH} from '../constants/ConstantKey';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../constants/ResponsiveScreen';
import {Colors} from '../constants/Colors';
import Carousel from 'react-native-banner-carousel';
import {FontSize, Fonts} from '../constants/Fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from '../components/Divider';

export default function Details() {
  const Render_SliderView = (item, index) => {
    return (
      <TouchableOpacity
        style={{height: SCREEN_WIDTH / 2}}
        key={index}
        onPress={{}}>
        <View>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: pixelSizeHorizontal(10),
            }}
            source={{uri: item.image}}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <HeaderView title="Details" />
      <ScrollView style={{flexGrow: 1}}>
        <Carousel
          autoplay={false}
          autoplayTimeout={4000}
          index={0}
          useNativeDriver={true}
          pageSize={SCREEN_WIDTH}
          pageIndicatorStyle={{backgroundColor: Colors.grey}}
          activePageIndicatorStyle={{backgroundColor: Colors.offWhite}}>
          {banner.map((image, index) => Render_SliderView(image, index))}
        </Carousel>
        <View style={{paddingHorizontal: pixelSizeHorizontal(20)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: pixelSizeVertical(10),
            }}>
            <Text
              style={{
                fontFamily: Fonts.BOLD,
                fontSize: FontSize.FS_17,
                color: Colors.primary,
              }}>
              Salmon Filet
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.primaryLight,
                padding: 8,
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
          <Text
            style={{
              marginVertical: 10,
              fontFamily: Fonts.MEDIUM,
              fontSize: FontSize.FS_15,
            }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            provident!
          </Text>
          <Divider />
          <View style={{marginVertical: 10}}>
            <Text>Tags</Text>
          </View>
          <Divider />
          <View>
            <Text style={{marginVertical:10}}>Benifits</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              rerum cumque minima, molestiae atque ea tenetur quas unde facilis
              vero.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
