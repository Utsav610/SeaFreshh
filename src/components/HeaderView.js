import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import { Colors } from '../constants/Colors';
  import { Images } from '../constants/Images';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import IconButton from './IconButton';
  import { pixelSizeHorizontal , pixelSizeVertical , widthPixel } from '../constants/ResponsiveScreen';
  import { FontSize , Fonts } from '../constants/Fonts';
  import FastImage from 'react-native-fast-image';
  import { goBack , navigate } from '../navigation/RootNavigation';
//   import {useSelector} from 'react-redux';
//   import {user_data} from '../../redux/reducers/userReducer';
  
  export default function HeaderView({
    title = '',
    isBack = true,
    profile = false,
    favourite = false,
  }) {
    // const userData = useSelector(user_data);
    let userData
    return (
      <>
        <SafeAreaView
          style={{flex: 0, backgroundColor: Colors.primary}}></SafeAreaView>
        <SafeAreaView>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Colors.primary}
          />
  
          <Image
            style={{
              width: '100%',
              height: widthPixel(80),
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              position: 'relative',
            }}
            source={Images.HeaderBG}
          />
  
          {title && (
            <View
              style={{
                paddingHorizontal: pixelSizeHorizontal(20),
                position: 'absolute',
                top: pixelSizeVertical(25),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center', flex: 3}}>
                {isBack && (
                  <IconButton
                    additionalStyle={styles.btnBack}
                    onPress={() => {
                      goBack();
                    }}>
                    <Icon name={'chevron-left'} size={32} color={Colors.white} />
                  </IconButton>
                )}
                <Text
                  style={{
                    marginLeft: isBack ? pixelSizeHorizontal(10) : 0,
                    fontSize: FontSize.FS_22,
                    fontFamily: Fonts.SEMIBOLD,
                    color: Colors.white,
                  }}>
                  {title}
                </Text>
              </View>
  
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {favourite && (
                  <IconButton
                    additionalStyle={styles.btnBack}
                    onPress={() => {
                      navigate('FavouriteList');
                    }}>
                    <Icon name={'heart-outline'} size={30} color={Colors.white} />
                  </IconButton>
                )}
                {profile && (
                  <TouchableOpacity
                    onPress={() => {
                      navigate('Profile');
                    }}>
                    {userData?.asset_url ? (
                      <FastImage
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 15,
                          marginLeft: pixelSizeHorizontal(15),
                        }}
                        source={{
                          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLff4uOnrrHn6eqrsbTZ3N25vsHHy82zuLvr7e7c3+DV2NnQ09W8wcPMz9FRQ01gAAADeUlEQVR4nO2b23LjIAxAuYibMfj//3ZxkqZJmtggWyKzw3no9PGMEAJLRIjBYDAYDAaDwWAwGAwGg4EQACBUjFFd/vsGANScXbiS/Sy6awFYH7SRd4zWLqmuXmCdfDC6eRmZ+2kVJf1q9BOvTlog/N8o/WrJ1MEKbPistKIzv1PaNLoGKzI7LR+y6RnLuYTgt5fuHixGK0hVcbrEis1prlUqseJyEnVrd5Xi2oOuQUoaz5FWsLQ4lXrFUturk/yGo1eqrQa/mEQuZRuVVqjXrz1Qa6iorVozaoU4q1q33i1UxCezQzhR16qIcSpMlFIJs3qlgFKuH2SclFkI12/COZVjmVAKMAVhhbIoWGSkZFBkTi23uxfoMh1XOlcIyyfm4LtJ0d3V/zep+RulCCP1lYmOPPokZUkQ8xcWT9y9c4XymJmwUpQH8hRwTqRXT+z2I6wIAn1N0LTfWLgPh0x6RwePChTdIXORipj9F0idcPuPvkWFKOqaWEkgUp2hlwe2NatIz70bU1PLsywe5YfoHdWU6yaQ1qgfGlr7K0wDmqmho6BntkFItRVPF/3GzqzvHidOJ6GqtiBrnFYqVpDdaf8bsMsUGebNxDIu9pi3b43bjVw6GF2YbNbvtIz0PR9xgPLhOVzGyLD0fu8Cwi7ZaK2NWf+GvNjveBlULOycUppjcfwKo6I0PdI3TtenXDYtPjt3uc6E4HL2yxzV+ryrg9Gk5iJTsnzlMc9Lahnpsk8RJkYxEDF5qZ9k/paF4paXqFgiBlP0Tm76PBaskBO1VomRN2/r5YaYzpawlAKkN6/dKrRM8ESVAkqQ0C3PEi6Ce/H2Y7caLZlPfrdUjrjGTHqHdmdqQaq8k+9QonVWboEN2P7rXy1zToXA9ck+a7nj9QHiOSv3YHX4lQmkY3vuvZY/5uRPy6YnK3ekO4R8hrBvJfGJ1diJagJbss5O8ScM7rOQMk4riFgBtZM0zdmOHxfX09rzx0+LGzCuaQFx0452q7ZeEXLY2GzVkOwTQ0JdCfVSzUMFNPULCJnLqVBZF2BmC1T90BQ7UkdaVYUK0M80cFJ1WUV1X/lA1eRNsSqVD6+a2zH+5Q8St5/qE+rlwREqUh24naTc7zJgfi5wjP39x3JneZHa/b0Px+Xulf2iwHnu/bAnpYLmZ3f2rTqw5zQYDAaDwaAD/wANKir9WY4qAQAAAABJRU5ErkJggg=='
                        }}
                      />
                    ) : (
                      <FastImage
                        source={Images.Profile}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 15,
                          marginLeft: pixelSizeHorizontal(15),
                        }}
                      />
                    )}
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </SafeAreaView>
      </>
    );
  }
  
  const styles = StyleSheet.create({});
  