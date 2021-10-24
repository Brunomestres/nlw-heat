import { StyleSheet } from "react-native";

import { getStatusBarHeight} from 'react-native-iphone-x-helper'
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17
  },
});
