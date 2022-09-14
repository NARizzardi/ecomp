import React from 'react';
import {Box, Image, Text, Circle, HStack, View, FlatList} from 'native-base';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../Themes/appColors';

export interface Props {
    imagem: string,
    modelo: string,
    descricao: string
    onPress: () => void,
}

export interface State {}

export default class CarCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        const {modelo, espec, imagem, descricao} = this.props;
        return (
            <View mb='5%'>
                <FlatList
                        data={imagem}
                        keyExtractor={item => String(item.id)}
                        renderItem={({item}) => (
                             
                        )}
                    />
               <Image source={{uri: imagem}} alt="imagem do carro" resizeMode='center' w={hp('20')} h={hp("15")}/>
                <Text>
                    {modelo}
                </Text>
            </View>
            
        );
    }
}
