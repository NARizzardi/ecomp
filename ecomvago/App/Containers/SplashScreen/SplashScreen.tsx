import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import appStyles from '../../Themes/appStyles';
import styles from './SplashScreenStyles';
import appImages from '../../Themes/appImages';
import appColors from '../../Themes/appColors';

export interface Props {}

export interface State {}

class SplashScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={[appStyles.centerView, styles.overView]}>
                <StatusBar backgroundColor={appColors.fundo}/>
                <Image style= {{resizeMode: 'center', width: 250, height: 100}} source={appImages.ecomvago}/>
            </View>
        );
    }
}

export default SplashScreen;
