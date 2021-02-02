import {Dimensions} from 'react-native';
const {RFValue: RFValue} = require('react-native-responsive-fontsize');
export const RFV = (e) => RFValue(e, Dimensions.get('screen').height);
