import { ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    inputContainer: {
        backgroundColor: appColors.fundo,
        borderColor: appColors.fundo,
        borderWidth: wp('0.3%'),
        margin: wp('2.5%'),
        paddingLeft: wp('3%'),
        borderRadius: wp('15%'),
        height: hp('5'),
        
    } as ViewStyle,
};
