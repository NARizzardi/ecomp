import { TextStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    buttonContainer: {
        
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
        padding: wp('2%'),
        borderRadius: wp('2%'),
    } as TextStyle,

    textButton: {
        
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    } as TextStyle,
};
