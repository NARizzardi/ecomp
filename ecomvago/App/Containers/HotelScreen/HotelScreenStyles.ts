import appColors from '../../Themes/appColors';
import { ImageStyle, ViewStyle } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { TextStyle } from 'react-native';

export default {
    imageContainer: {
        height: hp('35'),
        position: 'relative',
    } as ViewStyle,

    image: {
        position: 'absolute',
        width: '100%',
        height: hp('35'),
    } as ImageStyle,

    icone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: hp('2'),
        paddingTop: hp('4'),
    } as ViewStyle,

    notaContainer: {
        flexDirection: 'row',
        paddingRight: wp('3'),
    } as ViewStyle,

    nota: {
        backgroundColor: '#2c6000',
        width: wp('9'),
        borderRadius: wp('5'),
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,

    secao1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    } as ViewStyle,

    body: {
        paddingTop: hp('2'),
        paddingLeft: wp('3'),
    } as ViewStyle,

    distancia: {
        flexDirection: 'row',
    } as ViewStyle,

    titulo: {
        fontSize: wp('7'),
    } as TextStyle,

    oferta: {
        backgroundColor: appColors.fundo,
        width: wp('94'),
        borderWidth: 1,
        borderColor: '#448006',
        borderRadius: wp('2%'),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp('2'),
        justifyContent: 'space-between',
        paddingVertical: hp('2.5'),
        marginVertical: hp('2'),
    } as ViewStyle,

    modal: {
        flex: 1,
        backgroundColor: '#000000aa',
        paddingTop: hp('22'),
        paddingBottom: hp('24.5'),
    } as ViewStyle,

    modalInterno: {
        backgroundColor: '#ffffff',
        margin: wp('13'),
        paddingBottom: hp('3.5'),
        borderRadius: hp('1.5'),
        overflow: 'hidden',
    } as ViewStyle,
};
