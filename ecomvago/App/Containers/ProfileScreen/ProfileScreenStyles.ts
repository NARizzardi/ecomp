import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    viewGeral: {
        backgroundColor: appColors.fundo,
        flex: 1,
    } as ViewStyle,

    pesquisa: {
        backgroundColor: '#F8F8F8',
        height: hp('30%'),
        width: wp('95%'),
        alignSelf: 'center',
        margin: wp('3.5%'),
        borderRadius: wp('5'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    } as ViewStyle,

    cidade: {
        paddingTop: hp('2%'),
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
        borderBottomColor: '#ebecee',
        borderBottomWidth: 1,
        borderBottomStartRadius: wp('10%'),
        borderBottomEndRadius: wp('10%'),
    } as ViewStyle,

    data: {
        paddingVertical: hp('1%'),
        paddingLeft: wp('5%'),
        flexDirection: 'row',
        borderBottomColor: '#ebecee',
        borderBottomWidth: 1,
        borderBottomStartRadius: wp('10%'),
        borderBottomEndRadius: wp('10%'),
    } as ViewStyle,

    divisao: {
        paddingRight: wp('5%'),
        borderRightColor: '#ebecee',
        borderRightWidth: 1,
        borderRightStartRadius: wp('10%'),
        borderRightEndRadius: wp('10%'),
    } as ViewStyle,

    texto: {
        paddingLeft: wp('3%'),
        fontSize: wp('3.5'),
        color: '#636363',
        fontFamily: 'metropolis-regular',
    } as TextStyle,

    opcoes: {
        fontSize: wp('3.75'),
        paddingLeft: wp('3%'),
        fontFamily: 'metropolis-regular',
    } as TextStyle,

    filtro: {
        paddingTop: hp('2%'),
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
    } as ViewStyle,

    imagemView: {
        alignItems: 'center',
    } as ViewStyle,

    imagem: {
        resizeMode: 'center',
        width: wp('45'),
        height: hp('10'),
    } as ImageStyle,

    aviso: {
        backgroundColor: '#F8F8F8',
        height: hp('15%'),
        width: wp('90%'),
        alignSelf: 'center',
        margin: wp('3.5%'),
        borderRadius: wp('5'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        padding: wp('3%'),
    } as ViewStyle,

    avisoTextoGeral: {
        fontSize: wp('3.8'),
        textAlign: 'justify',
        fontFamily: 'metropolis-medium',
        lineHeight: hp('2.45'),
    } as TextStyle,

    negrito: {
        fontWeight: 'bold',
    } as TextStyle,

    blue: {
        color: appColors.blue,
    } as TextStyle,

    preferidos: {
        paddingTop: wp('7.5'),
    } as ViewStyle,

    preferidoText: {
        paddingLeft: wp('5'),
        fontFamily: 'metropolis-semi-bold',
    } as TextStyle,

    list: {
        paddingTop: wp('1'),
        paddingLeft: wp('1'),
    } as ViewStyle,
};
