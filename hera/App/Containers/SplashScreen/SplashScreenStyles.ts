import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    background:{
        flex:1,
        backgroundColor:'#63CEC4',
    },
    loadingText: {
        color: appColors.lime,
        fontSize: 20,
    } as TextStyle,

    textView: {
        margin: hp('15%'),
    } as ViewStyle,

    img: {
        flex: 1,
        width: wp('60%'),
        height: hp('60%'),
        resizeMode: ('center')
        

    } as ImageStyle,

    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle
};
