import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
  Animated,
  Image,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
// import FastImage from 'react-native-fast-image';
import {Images} from '../constants/Images';
import {resetScreen} from '../navigation/RootNavigation';
import {Colors} from '../constants/Colors';
import {pixelSizeHorizontal} from '../constants/ResponsiveScreen';
import {FontSize, Fonts} from '../constants/Fonts';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/ConstantKey';
import CustomButton from '../components/CustomButton';

const Intro = () => {
  const scrollRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [viewableIndex, setViewableIndex] = useState(0);

  const SliderData = [
    {
      title: 'Dive into Flavorful Thoughts 🐟💭',
      subTitle:
        'Lorem Ipsum is simply dummy the printing and typesetting industry',
      image: Images.Intro1,
    },
    {
      title: 'Order Anytime, Anywhere 📲🛒',
      subTitle:
        'Lorem Ipsum is simply dummy the printing and typesetting industry',
      image: Images.Intro2,
    },
    {
      title: 'Freshness at Your Doorstep',
      subTitle:
        'Lorem Ipsum is simply dummy the printing and typesetting industry',
      image: Images.Intro3,
    },
    {
      title: 'Ready to Savor the Sea?🍽️🐠',
      subTitle:
        'Lorem Ipsum is simply dummy the printing and typesetting industry',
      image: Images.Intro4,
    },
  ];

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const _onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    setIndex(viewableItems[0].index);
    setViewableIndex(viewableItems[0].index);
  }, []);

  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  // Action Methods
  const btnNextTap = () => {
    if (index == SliderData.length - 1) {
      resetScreen('Login');
    } else {
      scrollRef.current.scrollToIndex({animated: true, index: index + 1});
      setIndex(index + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          ref={scrollRef}
          data={SliderData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          initialScrollIndex={index}
          onViewableItemsChanged={_onViewableItemsChanged}
          viewabilityConfig={_viewabilityConfig}
          decelerationRate={'normal'}
          scrollEventThrottle={16}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <Image
                source={item.image}
                style={styles.imgStyle}
                resizeMode="stretch"
              />
              <Text style={styles.textStyle}>
                {item.title}

                <Text style={styles.textStyle}>{item.appName}</Text>
              </Text>
              {/* <Text style={styles.subTextStyle}>{item.subTitle}</Text> */}
            </View>
          )}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {SliderData.map((item, i) => (
            <View
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor:
                  i === viewableIndex
                    ? Colors.primary
                    : Colors.secondaryDarkGrey,
                margin: 5,
              }}
            />
          ))}
        </View>
        {/* <Pressable onPress={() => btnNextTap()} style={styles.btnStyle}>
          <Text style={styles.btnText}>
            {index == SliderData.length - 1 ? 'done' : 'next'}
          </Text>
        </Pressable> */}
        <View style={{paddingHorizontal: 20}}>
          <CustomButton
            title={index == SliderData.length - 1 ? 'DONE' : 'NEXT'}
            onPress={() => btnNextTap()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.offWhite,
  },
  itemView: {
    width: SCREEN_WIDTH,
  },
  textStyle: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.black,
    fontSize: FontSize.FS_30,
    marginHorizontal: pixelSizeHorizontal(20),
    marginTop: pixelSizeHorizontal(15),
  },
  hashTextStyle: {
    fontFamily: Fonts.BOLD,
    color: Colors.secondary,
    fontSize: FontSize.FS_24,
  },
  subTextStyle: {
    fontFamily: Fonts.REGULAR,
    color: Colors.dim_grey,
    fontSize: FontSize.FS_18,
    textAlign: 'center',
    marginHorizontal: pixelSizeHorizontal(40),
    marginTop: pixelSizeHorizontal(20),
  },
  imgStyle: {
    width: '100%',
    height: SCREEN_HEIGHT - 300,
  },
  btnStyle: {
    backgroundColor: Colors.black,
    padding: pixelSizeHorizontal(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginHorizontal: pixelSizeHorizontal(40),
    marginBottom: pixelSizeHorizontal(20),
    marginTop: pixelSizeHorizontal(30),
  },
});

export default Intro;
