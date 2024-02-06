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
