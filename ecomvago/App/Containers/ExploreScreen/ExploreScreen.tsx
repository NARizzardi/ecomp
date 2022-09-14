import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styles from './ExploreScreenStyles';

import Mapa from '../../Components/Mapa/Mapa';

export interface Props {
    navigation: NavigationProp<any>;
}
export interface State {}
export default class ExploreScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        const {} = this.state;
        const {} = this.props;

        return (
            <View>
                <Mapa />
            </View>
        );
    }
}
