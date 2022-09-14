import React from 'react';
import { ProgressBarAndroid, Text, View } from 'react-native';

export interface Props {
    quesito: string;
    progresso: number;
}

export default class AppProgressBar extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { quesito, progresso } = this.props;
        return (
            <View>
                <View>
                    <Text> {quesito} </Text>
                    <Text> {progresso} </Text>
                </View>

                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    progress={progresso / 10}
                    color={'#2c6000'}
                    indeterminate={false}
                />
            </View>
        );
    }
}
