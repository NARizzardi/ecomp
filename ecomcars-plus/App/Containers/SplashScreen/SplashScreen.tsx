import React from 'react';
import { View } from 'react-native';

import appStyles from '../../Themes/appStyles';
import images from '../../Themes/appImages';
import { Center, Image, Spinner, StatusBar, Text, ZStack } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export interface Props {}

export interface State {}

class SplashScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={[appStyles.centerView]}>
                <StatusBar translucent backgroundColor={"transparent"}/>
                <LinearGradient colors={['#1D1F20', '#A07A28']} style={{height: ('100%')}}>
                    <Center flex={1}>
                        <Image source={images.logoBranca} alt='Logo Ecomcars' resizeMode={'center'} width={'55%'}/>
                    </Center>
                </LinearGradient>
            </View>
        );
    }
}

export default SplashScreen;
