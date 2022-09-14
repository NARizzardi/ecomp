import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './HotelCardStyles';
export interface Props {
    image: string;
    nome: string;
    cidade: string;
    nota: number;
    onPress: () => void;
}

export interface State {}

class HotelCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { imagem, nome, cidade, nota } = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.container]}>
                    <ImageBackground
                        source={{
                            uri: imagem,
                        }}
                        style={[styles.imagem]}
                    />
                    <View style={[styles.info]}>
                        <Text style={[styles.branco]}>{nome}</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <View style={[styles.nota]}>
                                <Text style={[styles.branco]}>{nota}</Text>
                            </View>
                            <Text style={[styles.cidade, styles.branco]}>
                                {cidade}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default HotelCard;
