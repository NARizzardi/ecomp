import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    imagemView:{
        paddingTop:hp('2%'),
        alignItems: "center"
     } as ViewStyle,

     imagem:{
        resizeMode: 'center', 
        width: 180, 
        height: 100
     } as ImageStyle, 

     chamada:{
        fontSize: 23,
        textAlign: 'center',
        fontFamily: 'metropolis-bold',        
     } as TextStyle,

     botao:{
         paddingVertical: hp('3%'),
         marginHorizontal: wp('13%')
     } as ViewStyle,

     settings:{
        paddingLeft: wp('3%')
     } as ViewStyle,

     espacamento:{
        paddingVertical: hp('2%')
     } as ViewStyle,

     espacamentoMenor:{
         paddingVertical: hp('1%')
     } as ViewStyle,

     titulo:{
        fontSize: 18,
        fontFamily:'metropolis-semi-bold',
     } as TextStyle,

     subtitulo:{
        fontSize: 16,
        fontFamily:'metropolis-regular',
     } as TextStyle


};
