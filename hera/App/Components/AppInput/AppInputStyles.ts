import { ViewStyle } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    inputContainer: {
        borderColor: "#F8C60F",
        borderWidth: wp('0.3%'),
        marginLeft: wp('9%'),
        marginRight: wp('9%'),
        paddingLeft: wp('2%'),
        borderRadius: wp('4%'),
    } as ViewStyle,
};
