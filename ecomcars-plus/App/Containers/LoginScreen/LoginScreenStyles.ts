import { ViewStyle, TextStyle } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default {
    centerView:{
        flex: 1
    } as ViewStyle, 

    optionContainer: {
        marginBottom: hp('5'),
    } as ViewStyle,

    background: {  
        backgroundColor: '#E5E5E5'
    } as ViewStyle,

    headerText: {
        color: '#A07A28',
        fontSize: wp('10')
     } as TextStyle,
     
    input:{
        borderColor: '#A07A28',
    } as ViewStyle
};
