import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HeaderView from '../../components/HeaderView';
import {Colors} from '../../constants/Colors';
import {FontSize, Fonts} from '../../constants/Fonts';

const MyOrder = () => {
  const [currentTab, setCurrentTab] = useState('current');

  return (
    <>
      <HeaderView title="My Order" favourite={true} />
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', marginVertical: 20, borderWidth: 1}}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              currentTab === 'current' && styles.activeTab,
            ]}
            onPress={() => setCurrentTab('current')}>
            <Text
              style={[
                styles.tabButtonText,
                currentTab === 'current' && styles.activeTabText,
              ]}>
              Current Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              currentTab === 'past' && styles.activeTab,
            ]}
            onPress={() => setCurrentTab('past')}>
            <Text
              style={[
                styles.tabButtonText,
                currentTab === 'past' && styles.activeTabText,
              ]}>
              Past Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  tabButton: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabButtonText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.FS_15,
    color: Colors.primary,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  activeTabText: {
    color: Colors.white,
  },
});

export default MyOrder;
