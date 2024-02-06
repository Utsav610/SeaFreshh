import { StyleSheet } from 'react-native';
import { Fonts ,  FontSize, } from '../constants/Fonts';
import { Colors } from '../constants/Colors';
import { pixelSizeHorizontal } from '../constants/ResponsiveScreen';

const GlobalStyles = StyleSheet.create({
  headerText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.FS_30,
    color: Colors.primary,
  },
  subHeaderText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.FS_23,
    color: Colors.black,
  },
  container: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(20),
    backgroundColor:Colors.white
  },
  dropDownContainer:{
    flex: 1,
    height: 40,
    paddingHorizontal: pixelSizeHorizontal(15),
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  nearByText: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: FontSize.FS_18,
    color: Colors.primary,
    marginVertical: 10,
  },
});

export default GlobalStyles;