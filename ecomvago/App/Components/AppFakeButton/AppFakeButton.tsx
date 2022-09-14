import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import appStyles from '../../Themes/appStyles';
import styles from './AppFakeButtonStyles';

export interface Props {
    text: string;
    onPress: () => void;
}

export interface State {}

export default class AppFakeButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { text } = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View
                style={[styles.buttonContainer]}>
                    <Text style={[appStyles.centerText, styles.textButton]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
