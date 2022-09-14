import { TextStyle, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    overView: {
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle,

    textView: {
        margin: hp('15%'),
    } as ViewStyle,
};
