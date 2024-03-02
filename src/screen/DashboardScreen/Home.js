import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Categories, banner} from '../../DummyData/Data';
import Carousel from 'react-native-banner-carousel';
import {SCREEN_WIDTH} from '../../constants/ConstantKey';
import {pixelSizeHorizontal} from '../../constants/ResponsiveScreen';
import {Colors} from '../../constants/Colors';
import {FontSize, Fonts} from '../../constants/Fonts';
import HeaderView from '../../components/HeaderView';
import FastImage from 'react-native-fast-image';
import {Images} from '../../constants/Images';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../navigation/RootNavigation';

export default function Home() {
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

  const Render_Food_SliderView = (item, index) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginHorizontal: 20,
          marginBottom: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }}>
        <TouchableOpacity
          style={{overflow: 'hidden'}}
          onPress={() => {
            navigate('Details');
          }}>
          <FastImage
            source={Images.Item1}
            style={{width: '100%', height: 200}}
            resizeMode="stretch"
          />
          <View style={{marginHorizontal: 15, marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: Fonts.MEDIUM,
                  fontSize: FontSize.FS_16,
                  color: Colors.primary,
                }}>
                Salmon Filet
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.MEDIUM,
                  fontSize: FontSize.FS_16,
                  color: Colors.black,
                }}>
                500G
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.FS_15,
                  marginVertical: 5,
                }}>
                Salmon is nutrient-dense fish
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 8}}>
              <View
                style={{
                  borderWidth: 0.8,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginRight: 8,
                }}>
                <Text style={{fontFamily: Fonts.SEMIBOLD, color: Colors.black}}>
                  Salmon
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.8,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginRight: 8,
                }}>
                <Text style={{fontFamily: Fonts.SEMIBOLD, color: Colors.black}}>
                  Salmon
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.8,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginRight: 8,
                }}>
                <Text style={{fontFamily: Fonts.SEMIBOLD, color: Colors.black}}>
                  Salmon
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{fontFamily: Fonts.SEMIBOLD, fontSize: FontSize.FS_16}}>
                500g
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.SEMIBOLD,
                  fontSize: FontSize.FS_16,
                  color: Colors.black,
                }}>
                $120/500g
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <CustomButton
          title={'Add To Cart'}
          style={{borderRadius: 20, marginHorizontal: 20}}
        />
      </View>
    );
  };

  return (
    <>
      <HeaderView title="Dashboard" profile={true} />
      <ScrollView style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
        <Carousel
          autoplay={false}
          autoplayTimeout={4000}
          index={0}
          useNativeDriver={true}
          pageSize={SCREEN_WIDTH - pixelSizeHorizontal(30)}
          pageIndicatorStyle={{backgroundColor: Colors.grey}}
          activePageIndicatorStyle={{backgroundColor: Colors.offWhite}}>
          {banner.map((image, index) => Render_SliderView(image, index))}
        </Carousel>

        <Text
          style={{
            fontFamily: Fonts.SEMIBOLD,
            fontSize: FontSize.FS_16,
            color: Colors.black,
          }}>
          Categories
        </Text>

        <FlatList
          numColumns={4}
          data={Categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text
                style={{
                  flex: 1,
                  fontFamily: Fonts.MEDIUM,
                  fontSize: FontSize.FS_14,
                  color: Colors.black,
                  marginTop: 10,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <Text
          style={{
            fontFamily: Fonts.MEDIUM,
            fontSize: FontSize.FS_18,
            marginVertical: 10,
            color: Colors.black,
          }}>
          Popular Sea Food
        </Text>

        <Carousel
          autoplay={false}
          autoplayTimeout={4000}
          index={0}
          useNativeDriver={true}
          pageSize={SCREEN_WIDTH - pixelSizeHorizontal(30)}
          pageIndicatorStyle={{backgroundColor: Colors.grey}}
          activePageIndicatorStyle={{backgroundColor: Colors.offWhite}}>
          {banner.map((image, index) => Render_Food_SliderView(image, index))}
        </Carousel>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '21%',
    padding: 10,
    backgroundColor: Colors.primaryLight,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
