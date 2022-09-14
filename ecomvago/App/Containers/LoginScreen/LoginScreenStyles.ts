import appColors from '../../Themes/appColors';
import { ImageStyle, ViewStyle } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
    optionContainer: {
        marginBottom: hp('5%'),
    } as ViewStyle,

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,

    logo: {
        resizeMode: 'center',
        marginTop: hp('10'),
        width: wp('50'),
        height: hp('20'),
    } as ImageStyle,

    box: {
        backgroundColor: appColors.white,
        height: hp('40%'),
        width: wp('95%'),
        alignSelf: 'center',
        borderRadius: wp('5'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    } as ViewStyle,

    text: {
        marginLeft: wp('10%'),
    } as ViewStyle,

    btnContainer: {
        paddingTop: hp('3'),
    } as ViewStyle,
};
