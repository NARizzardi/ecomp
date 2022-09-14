import { ImageStyle, ViewStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../../Themes/appColors';
export default {
    imagem: {
        zIndex: 0,
        position: 'absolute',
        alignSelf: 'center',
        width: '135%',
        height: '135%',
    } as ImageStyle,

    container: {
        overflow: 'hidden',
        margin: wp('2.5'),

        borderRadius: wp('7.5'),
        width: wp('60'),
        height: hp('18'),
    } as ViewStyle,

    nota: {
        backgroundColor: '#2c6000',
        width: wp('8'),
        borderRadius: wp('8'),
        alignItems: 'center',
    } as ViewStyle,

    info: {
        paddingTop: hp('10'),
        paddingLeft: wp('2'),
    } as ViewStyle,

    cidade: {
        paddingLeft: wp('1.5'),
    },

    branco: {
        color: appColors.white,
    },
};
