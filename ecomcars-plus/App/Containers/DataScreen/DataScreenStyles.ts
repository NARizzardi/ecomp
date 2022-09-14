import { ViewStyle, TextStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    optionContainer: {
        marginBottom: hp('5%'),
    } as ViewStyle,

    text: {
        fontSize: wp('5.5'),
        marginLeft: wp('5'),
        marginTop: hp('3'),
    } as TextStyle,
};
