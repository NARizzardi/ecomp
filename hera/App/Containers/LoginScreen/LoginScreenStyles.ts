import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default {
    background:{
        flex:1,
        backgroundColor:'#63CEC4',
    },
    optionContainer: {
        marginBottom: hp('5%'),
    } as ViewStyle,
    logoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
    },
    loginTextStyle:{
        color: '#06A294',
        fontFamily: 'Metropolis-Medium',
        fontSize: hp('4%'),
        marginBottom: hp('5%'),
        textAlign: 'center'

    } as TextStyle,
    forgotTextStyle:{
        color: '#06A294',
        fontSize: hp('2%'),
        textAlign: 'center',
        fontFamily: 'Metropolis-Light'
    } as TextStyle,
    whiteBg:{
        backgroundColor:'#FFFFFF',
        marginLeft:wp('7%'),
        marginRight:wp('7%'),
        marginBottom:hp('20%'),
        borderRadius: hp('4%'),
        paddingTop: hp('5.0%'),
        paddingLeft: wp('9.0%'),
        paddingRight: wp('9.0%'),
        paddingBottom: hp('5.0%'),
    } as ViewStyle,
    img:{
        flex: 1,
        width: wp('50%'),
        resizeMode: ('center')
    } as ImageStyle,
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    inputContainer: {
        borderColor: "#F8C60F",
        borderWidth: wp('0.3%'),
        marginLeft: wp('9%'),
        marginRight: wp('9%'),
        paddingLeft: wp('2%'),
        borderRadius: wp('4%'),
    },
    iconStyle:{
        marginTop:('2%'),
        marginLeft:('1%'),
    },
   
};
