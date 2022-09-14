import { TextStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    buttonContainer: {
        backgroundColor:"#F8C60F",
        marginLeft: wp('9%'),
        marginRight: wp('9%'),
        padding: wp('2%'),
        borderRadius: wp('4%'), 
    } as TextStyle,

    textButton: {
        color: appColors.white,
        fontWeight: 'normal',
        fontSize: hp('3%'),
    } as TextStyle,
};
