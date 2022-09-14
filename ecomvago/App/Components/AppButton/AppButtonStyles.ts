import { TextStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    buttonContainer: {
        backgroundColor: appColors.botoes,
        marginLeft: wp('2.5%'),
        marginRight: wp('2.5%'),
        padding: wp('2.5%'),
        borderRadius: wp('2%'),
    } as TextStyle,

    textButton: {
        color: appColors.white,
        fontFamily: 'metropolis-bold',
        fontSize: hp('2.5%'),
    } as TextStyle,
};
