import { ViewStyle } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    inputContainer: {
        borderColor: appColors.darkgrey,
        borderWidth: wp('0.3%'),
        marginLeft: wp('15%'),
        marginRight: wp('15%'),
        padding: wp('2.5%'),
        borderRadius: wp('3%'),
    } as ViewStyle,
};
