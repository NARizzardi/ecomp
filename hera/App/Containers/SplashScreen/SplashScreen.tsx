import React from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';

import appStyles from '../../Themes/appStyles';
import appColors from '../../Themes/appColors';
import styles from './SplashScreenStyles';

export interface Props {}

export interface State {}

class SplashScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    render() {
        return (
            <View style={[styles.background, styles.imgView,] }>
                <Image style={[styles.img]} source={require('../../Images/general/Hera_Logo_Principal.png')} />
            </View>
        );
    }
}

export default SplashScreen;
