import { TextStyle, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    loadingText: {
        color: appColors.lime,
        fontSize: 20,
    } as TextStyle,

    textView: {
        margin: hp('15%'),
    } as ViewStyle,
};
